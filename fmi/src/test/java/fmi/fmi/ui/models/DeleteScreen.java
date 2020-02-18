package fmi.fmi.ui.models;
import fmi.fmi.ui.models.DeleteForm;

public class DeleteScreen {

	
	public DeleteForm clickDeleteButton() {
		return new DeleteForm();
	}
	public static void show() {
		System.out.println("choose yes or no");
	}
}