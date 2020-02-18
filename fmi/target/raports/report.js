$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddComment.feature");
formatter.feature({
  "line": 2,
  "name": "Add comment",
  "description": "За да се ползва системата е необходимо всеки потребител\n първо да е влезнал в системата с предварително регистриран профил.",
  "id": "add-comment",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Добавяне на коментар с валидни данни",
  "description": "",
  "id": "add-comment;добавяне-на-коментар-с-валидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Потребителя се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутон за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Отваря се попъп за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въведе текст",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Натисне бутон за поствсне",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Показва съобщение \"Вашият коментар е успешно добавен\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребитяле_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 178121100,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натиска_бутон_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 1447400,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.отваря_се_попъп_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.въведе_текст()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натисне_бутон_за_поствсне()"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вашият коментар е успешно добавен",
      "offset": 19
    }
  ],
  "location": "CommentSteps.показва_съобщение(String)"
});
formatter.result({
  "duration": 3169800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Добавяне на коментар без данни",
  "description": "",
  "id": "add-comment;добавяне-на-коментар-без-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Потребителя се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Натиска бутон за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Отваря се попъп за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Не въведе текст",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Натисне бутон за поствсне",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Показва съобщение \"Вашият коментар не е успешно добавен\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребитяле_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натиска_бутон_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.отваря_се_попъп_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.не_въведе_текст()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натисне_бутон_за_поствсне()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вашият коментар не е успешно добавен",
      "offset": 19
    }
  ],
  "location": "CommentSteps.показва_съобщение(String)"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Добавяне на коментар с невалидни данни",
  "description": "",
  "id": "add-comment;добавяне-на-коментар-с-невалидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Потребителя се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Натиска бутон за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Отваря се попъп за добавяне на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Въведе текст по-малко от два символа",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Натисне бутон за поствсне",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Показва съобщение \"Вашият коментар не е успешно добавен\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребитяле_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натиска_бутон_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.отваря_се_попъп_за_добавяне_на_коментар()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.въведе_текст_по_малко_от_два_символа()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.натисне_бутон_за_поствсне()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вашият коментар не е успешно добавен",
      "offset": 19
    }
  ],
  "location": "CommentSteps.показва_съобщение(String)"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.uri("DeletingComment.feature");
formatter.feature({
  "line": 2,
  "name": "Deleting comment",
  "description": "За да се изтрива коментар е необходимо \n администратора да е влезнал първо в системата с предварително регистриран профил.",
  "id": "deleting-comment",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "изтриване на коментар",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Потребителят се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за изтриване на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Отваря се попъп за потвърждаване изтриването",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избира \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Vijda suobshtenie \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар;",
  "rows": [
    {
      "cells": [
        "name",
        "status"
      ],
      "line": 16,
      "id": "deleting-comment;изтриване-на-коментар;;1"
    },
    {
      "cells": [
        "yes",
        "success"
      ],
      "line": 17,
      "id": "deleting-comment;изтриване-на-коментар;;2"
    },
    {
      "cells": [
        "no",
        "fail"
      ],
      "line": 18,
      "id": "deleting-comment;изтриване-на-коментар;;3"
    },
    {
      "cells": [
        "",
        "fail"
      ],
      "line": 19,
      "id": "deleting-comment;изтриване-на-коментар;;4"
    },
    {
      "cells": [
        "blqbl",
        "fail"
      ],
      "line": 20,
      "id": "deleting-comment;изтриване-на-коментар;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "изтриване на коментар",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Потребителят се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за изтриване на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Отваря се попъп за потвърждаване изтриването",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избира \"yes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Vijda suobshtenie \"success\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребителят_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.натиска_бутон_за_изтриване_на_коментар()"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.отваря_се_попъп_за_потвърждаване_изтриването()"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 8
    }
  ],
  "location": "DeleteCommentSteps.избира(String)"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 19
    }
  ],
  "location": "DeleteCommentSteps.vijda_suobshtenie(String)"
});
formatter.result({
  "duration": 98200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "изтриване на коментар",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Потребителят се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за изтриване на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Отваря се попъп за потвърждаване изтриването",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избира \"no\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Vijda suobshtenie \"fail\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребителят_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.натиска_бутон_за_изтриване_на_коментар()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.отваря_се_попъп_за_потвърждаване_изтриването()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 8
    }
  ],
  "location": "DeleteCommentSteps.избира(String)"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 19
    }
  ],
  "location": "DeleteCommentSteps.vijda_suobshtenie(String)"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "изтриване на коментар",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Потребителят се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за изтриване на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Отваря се попъп за потвърждаване изтриването",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избира \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Vijda suobshtenie \"fail\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребителят_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.натиска_бутон_за_изтриване_на_коментар()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.отваря_се_попъп_за_потвърждаване_изтриването()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "DeleteCommentSteps.избира(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 19
    }
  ],
  "location": "DeleteCommentSteps.vijda_suobshtenie(String)"
});
formatter.result({
  "duration": 69200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "изтриване на коментар",
  "description": "",
  "id": "deleting-comment;изтриване-на-коментар;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Потребителят се намира в екрана на статията",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за изтриване на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Отваря се попъп за потвърждаване изтриването",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избира \"blqbl\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Vijda suobshtenie \"fail\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ArticalScreenNav.потребителят_се_намира_в_началния_екран()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.натиска_бутон_за_изтриване_на_коментар()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCommentSteps.отваря_се_попъп_за_потвърждаване_изтриването()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blqbl",
      "offset": 8
    }
  ],
  "location": "DeleteCommentSteps.избира(String)"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 19
    }
  ],
  "location": "DeleteCommentSteps.vijda_suobshtenie(String)"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
});