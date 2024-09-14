package com.stepDefiniton;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import static org.junit.Assert.assertEquals;

import java.time.Duration;

public class LoginMfg {
    WebDriver driver;
    
	@Given("I am on the login page")
	public void i_am_on_the_login_page() {
	 WebDriverManager.chromedriver().setup();
	 driver= new ChromeDriver();
	 driver.manage().window().maximize();
	 driver.get("https://account.cplonline.co.uk/Account/Login?ReturnUrl=%2F");
	}

	@When("I enter username {string} and password {string}")
	public void i_enter_username_and_password(String username, String password) {
		 WebElement usernameField = driver.findElement(By.id("Username")); 
	        usernameField.sendKeys(username);

	        WebElement continueButton = driver.findElement(By.id("btnContinue")); 
	        continueButton.click();
	        WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(10)); // 10 seconds wait

	        // Locate the toggle password icon and click it
	        WebElement togglePasswordIcon = wait.until(ExpectedConditions.elementToBeClickable(By.id("togglePassword")));
	        togglePasswordIcon.click();

	        // Locate the password field
	        WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("pw")));

	        // Enter password into the field
	        passwordField.sendKeys(password);
	}

	@And("I click on sign in button")
	public void i_click_on_sign_in_button() {
		WebElement signInButton = driver.findElement(By.xpath("//input[@type='submit']")); 
        signInButton.click();
	}

	@Then("I should be on the login page with course completion as {string}")
	public void i_should_be_on_the_login_page_with_course_completion_as(String expectedCompletion) throws Throwable {
		WebElement cookie=driver.findElement(By.xpath("//div[text()='Accept']"));
		cookie.click();
		WebElement backToPlatformLink = driver.findElement(By.className("backToPlatform"));
		backToPlatformLink.click();
		
		WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(10)); // 10 seconds timeout

        // Wait for the course completion status element to be visible
        WebElement completionStatus = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[text()='100% complete']")));

        // Get the text from the completion status element
        String actualCompletion = completionStatus.getText();

        // Validate the course completion status
        assertEquals(expectedCompletion, actualCompletion);

	}
	@And("I should be able to logout")
    public void i_should_be_able_to_logout() {
		WebElement cookie=driver.findElement(By.xpath("//div[text()='Accept']"));
		cookie.click();
		driver.findElement(By.xpath("//div[@class='CampusHeaderMenuOptions CampusAccountBtn']")).click();
        WebElement logoutButton = driver.findElement(By.xpath("//span[text()='Sign Out']")); 
        logoutButton.click();

		/*
		 * // Validate that the user is redirected back to the login page WebElement
		 * loginPageElement = driver.findElement(By.id("loginPage"));
		 * assertTrue(loginPageElement.isDisplayed());
		 * 
		 * // Close the browser
		 */        
        driver.quit();
    }

}
