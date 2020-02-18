package fmi.fmi.models;


import java.util.Date;

/**
 * 
 */
public class Comment {

    /**
     * Default constructor
     */
    public Comment() {
    }

    /**
     * 
     */
    private int CommentId;

    /**
     * 
     */
    private String Text;

    /**
     * 
     */
    private int UserId;

    /**
     * 
     */
    private int ArticalId;

    /**
     * 
     */
    private Date DateTime ;

    /**
     * 
     */
    public Artical topic;

    /**
     * 
     */
    public User user;

    /**
     * 
     */
    public Admin admin;
    
    public String getText() {
        // TODO implement here
        return Text;
    }

    /**
     * @param pass 
     * @return
     */
    public void setText(String Text) {
       this.Text=Text;
    }


}