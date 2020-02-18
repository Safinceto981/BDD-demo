package fmi.fmi.services;

import java.util.ArrayList;
import java.util.List;

import fmi.fmi.models.Comment;
import fmi.fmi.models.User;

public class UserService {
	private List<Comment> commentDB;

	public UserService() {
		commentDB = new ArrayList<Comment>();
		Comment comment = new Comment();
		comment.setText("komentar");

		commentDB.add(comment);
	}

	public String publish(String text) {
		return text;
	}
}