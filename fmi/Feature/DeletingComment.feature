
Feature: Deleting comment
За да се изтрива коментар е необходимо 
   администратора да е влезнал първо в системата с предварително регистриран профил. 


  Scenario Outline: изтриване на коментар
  
   Given Потребителят се намира в екрана на статията
    And Натиска бутон за изтриване на коментар 
    And Отваря се попъп за потвърждаване изтриването
    And Избира "<name>"
    Then Vijda suobshtenie "<status>"

    Examples: 
      | name |status |
      | yes  |success|
      | no   |fail   |
      |      |fail   |
      | blqbl|fail   |
