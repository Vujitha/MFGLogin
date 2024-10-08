package com.Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class) //Ctrl+Shift+O to remove error of cucumber.class
@CucumberOptions(features="src/test/resources/Features",glue= {"com.stepDefiniton"},
monochrome=true,
plugin= {"pretty","html:Reports/HTMLReports","json:Reports/cucumber.json"}
)
public class Runner {

}
