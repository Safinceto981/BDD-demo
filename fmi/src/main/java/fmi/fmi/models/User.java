package fmi.fmi.models;


import java.util.*;

/**
 * 
 */
public class User {

    /**
     * Default constructor
     */
    public User() {
    }

    /**
     * 
     */
    private String username;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String pass;

    /**
     * 
     */
    public int UserId;

    /**
     * 
     */
    public Set<Comment> comments;

    /**
     * Default constructor
     */
    public void User() {
        // TODO implement here
    }

    /**
     * @return
     */
    public String getUsername() {
        // TODO implement here
        return username;
    }

    /**
     * @param username 
     * @return 
     * @return
     */
    public void setUsername(String username) {
       this.username=username;
    }

    /**
     * @return
     */
    public String getPass() {
        // TODO implement here
        return pass;
    }

    /**
     * @param pass 
     * @return
     */
    public void setPass(String pass) {
       this.pass=pass;
    }

    /**
     * @return
     */
    public Set<Comment> getComments() {
  return comments;
    }

    /**
     * @param coments 
     * @return
     */
    public void setComments(Set<Comment> comments) {
       this.comments=comments;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        this.email=email;
    }

    /**
     * @return
     */
    public void getEmail() {
        
    }

}