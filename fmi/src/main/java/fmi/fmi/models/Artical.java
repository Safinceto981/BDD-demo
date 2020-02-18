package fmi.fmi.models;


import java.util.*;

/**
 * 
 */
public class Artical {

    /**
     * Default constructor
     */
    public Artical() {
    }

    /**
     * 
     */
    private int ArticalId;

    /**
     * 
     */
    private String Name;

    /**
     * 
     */
    public Set<Artical> children;

    /**
     * 
     */
    public Artical parent;

    /**
     * 
     */
    public Set<Comment> comments;

    /**
     * @param comment
     */
    public void addComment(Comment comment) {
        // TODO implement here
    }

    /**
     * @param comment
     */
    public void removeComment(Comment comment) {
        // TODO implement here
    }

    /**
     * @return
     */
    public Comment getComment() {
        // TODO implement here
        return null;
    }

}