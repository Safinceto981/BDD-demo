package fmi.fmi.ui.models;

public class DeleteForm {

	private String text;
	private String message;

	public void addText(String text) {
		this.text = text;
	}

	public Object getMessage() {
		return message;
	}
	public String delete() {

		if (null==text||text.length()<3||text.length()>3) {
			message = "fail";
		
		} else {
			message="success";
		}
		return message;
		
	}

	

}