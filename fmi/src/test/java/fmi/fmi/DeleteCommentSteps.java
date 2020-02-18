package fmi.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import fmi.fmi.ui.models.DeleteForm;
import fmi.fmi.ui.models.DeleteScreen;

public class DeleteCommentSteps {

	private DeleteForm deleteForm;

	@Given("^Натиска бутон за изтриване на коментар$")
	public void натиска_бутон_за_изтриване_на_коментар() throws Throwable {
		deleteForm = ArticalScreenNav.getArticalIfExists2().clickDeleteButton();
	}

	@Given("^Отваря се попъп за потвърждаване изтриването$")
	public void отваря_се_попъп_за_потвърждаване_изтриването() throws Throwable {
		DeleteScreen.show();
	}

	

	

	@Given("^Избира \"([^\"]*)\"$")
	public void избира(String text) throws Throwable {
	    deleteForm.addText(text);
	}

	@Then("^Vijda suobshtenie \"([^\"]*)\"$")
	public void vijda_suobshtenie(String message) throws Throwable {
		assertEquals(message, deleteForm.delete());
	}
}
