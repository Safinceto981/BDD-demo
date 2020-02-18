package fmi.fmi.ui.models;

import fmi.fmi.services.UserService;

public class CommentForm {

	private String text;
	private String message;

	public void addText(String text) {
		this.text = text;

	}


	public void publish() {

		boolean isCommentValue = null != text && !"".equals(text);
		

		if (isCommentValue &&text.length()>2) {

			message = "Вашият коментар е успешно добавен";

		} else {
			message = "Вашият коментар не е успешно добавен";
		}
	}

	public Object getMessage() {
		
		return message;
	}

}
