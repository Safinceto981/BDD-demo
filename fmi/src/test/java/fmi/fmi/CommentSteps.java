package fmi.fmi;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import fmi.fmi.ui.models.CommentForm;

public class CommentSteps {
	
	private CommentForm commentForm;
	
	@Given("^Натиска бутон за добавяне на коментар$")
	public void натиска_бутон_за_добавяне_на_коментар() throws Throwable {
	    commentForm=ArticalScreenNav.getArticalIfExists().clickLoginButton();
	}

	@Given("^Отваря се попъп за добавяне на коментар$")
	public void отваря_се_попъп_за_добавяне_на_коментар() throws Throwable {
		assertNotNull(commentForm);
	}

	@When("^Въведе текст$")
	public void въведе_текст() throws Throwable {
	   commentForm.addText("Komentar");
	}

	@When("^Натисне бутон за поствсне$")
	public void натисне_бутон_за_поствсне() throws Throwable {
	   commentForm.publish();
	}

	@Then("^Показва съобщение \"([^\"]*)\"$")
	public void показва_съобщение(String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage, commentForm.getMessage());
	}

	@When("^Не въведе текст$")
	public void не_въведе_текст()throws Throwable {
		   commentForm.addText("");
	}
	@When("^Въведе текст по-малко от два символа$")
	public void въведе_текст_по_малко_от_два_символа() throws Throwable {
	   commentForm.addText("d");
	}


}
