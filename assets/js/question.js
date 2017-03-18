// What we need our script to do
// 1. The User makes a selection presses a button
// 2. Check to see what bottun The User pressed
// 3. Check the value of the button that was pressed agienst answer
// 4. The User presses the next question button
// 5. The script loads a new question and options
// 6. Capture the option The User selected
// 7. Display score after quiz has been completed

var questions = [{
        //    Question #1
        "question": "1. Which character was a previous incarnation of the One?",
        "option1": "The Architect",
        "option2": "The Keymaker",
        "option3": "The Merovingian",
        "option4": "Seraph",
        "answer": "3"
    }, { //    Question #2
        "question": "2. Which religion is referenced in The Matrix trilogy?",
        "option1": "Buddhism",
        "option2": "Gnosticism",
        "option3": "Christianity",
        "option4": "All of the above",
        "answer": "4"
    }, { //    Question #3
        "question": "3. How does the Nebuchadnezzar initially contact Neo?",
        "option1": "Through the white rabbit",
        "option2": "Through his home computer",
        "option3": "Through a cell phone at work",
        "option4": "Through an analog phone booth",
        "answer": "4"
    }, { //    Question #4
        "question": "4. Who persistently refers to Neo as Mr. Anderson?",
        "option1": "Agent Smith",
        "option2": "The Oracle",
        "option3": "Cypher",
        "option4": "Commander Lock",
        "answer": "1"
    }, { //    Question #5
        "question": "5. How does Trinity resurrect Neo, when he dies in The Matrix?",
        "option1": "She enters the Matrix and defeats Agent Smith",
        "option2": "She gives Neo CPR on the Nebuchadnezzar",
        "option3": "She kisses him",
        "option4": "She asks Morpheus for help",
        "answer": "3"
    }, { //    Question #6
        "question": "6. How does Neo resurrect Trinity, when she dies in The Matrix Reloaded?",
        "option1": "He reaches into her body and massages her heart",
        "option2": "He removes the bullet from her body",
        "option3": "He patches her into the Agents’ network",
        "option4": "Trinity doesn’t really die",
        "answer": "1"
    }, { //    Question #7
        "question": "7. What proverb is written in Latin over the Oracle’s kitchen door?",
        "option1": "\"Wisdom Is Silence\"",
        "option2": "\"Know Thyself\"",
        "option3": "\"All Is Vanity\"",
        "option4": "\"Father, Son, and Holy Ghost\"",
        "answer": "2"
    }, { //    Question #8
        "question": "8. Why do Morpheus, Trinity, and Neo initially visit the Merovingian?",
        "option1": "To ask him about the Oracle",
        "option2": "To ask him for help with the Agents",
        "option3": "To ask him to release the Keymaker",
        "option4": "To bargain with the Trainman",
        "answer": "3"
    }, { //    Question #9
        "question": "9. Which crew member’s body does Agent Smith infiltrate?",
        "option1": "Tank’s",
        "option2": "Bane’s",
        "option3": "Link’s",
        "option4": "Cypher’s",
        "answer": "2"
    }, { //    Question #10
        "question": "10. Who makes a deal with Agent Smith to sell out Morpheus in The Matrix?",
        "option1": "Agent Brown",
        "option2": "Mouse",
        "option3": "The Oracle",
        "option4": "Cypher",
        "answer": "4"
    }, { //    Question #11
        "question": "11. Why do Tank, Trinity, and Neo consider killing Morpheus in The Matrix?",
        "option1": "He lied to them about the Oracle",
        "option2": "To protect Zion",
        "option3": "To avenge Apoc’s death",
        "option4": "He asks them to",
        "answer": "2"
    }, { //    Question #12
        "question": "12. How do freed minds leave the Matrix and return to the real world?",
        "option1": "Option One",
        "option2": "Option Two",
        "option3": "Option Three",
        "option4": "Option Four",
        "answer": "1"
    }, { //    Question #13
        "question": "13. What’s in the package that Agent Smith delivers to Neo at the start of The Matrix Reloaded?",
        "option1": "Agent Smith’s sunglasses",
        "option2": "A cell phone",
        "option3": "Copies of Thomas Anderson’s files",
        "option4": "Agent Smith’s earpiece",
        "answer": "4"
    }, { //    Question #14
        "question": "14. Who ultimately delivers the Keymaker to Morpheus, Trinity, and Neo?",
        "option1": "The Merovingian",
        "option2": "The Ghost Twins",
        "option3": "Persephone",
        "option4": "Agent Smith",
        "answer": "3"
    }, { //    Question #15
        "question": "15. Who pilots the Hammer back into Zion at the end of The Matrix Revolutions?",
        "option1": "Roland",
        "option2": "Niobe",
        "option3": "Morpheus",
        "option4": "None of the above",
        "answer": "2"
    }, { //    Question #16
        "question": "16. Who created the Matrix?",
        "option1": "Agent Smith",
        "option2": "The Oracle",
        "option3": "The Architect",
        "option4": "The Keymaker",
        "answer": "3"
    }, { //    Question #17
        "question": "17. Who speaks at the first assembly at Zion?",
        "option1": "Councilor Hamann and Morpheus",
        "option2": "Lock and Niobe",
        "option3": "Hamann, Lock, Niobe, and Morpheus",
        "option4": "Morpheus and Neo",
        "answer": "2"
    }, { //    Question #18
        "question": "18. Where is Zion?",
        "option1": "In the Matrix",
        "option2": "Near the earth’s core",
        "option3": "Just below the Machine City",
        "option4": "None of the above",
        "answer": "2"
    }, { //    Question #19
        "question": "19. About what year is it in the ravaged real world?",
        "option1": "1999",
        "option2": "2199",
        "option3": "2060",
        "option4": "5416",
        "answer": "2"
    }, { //    Question #20
        "question": "20. What visions does Neo have throughout The Matrix Reloaded?",
        "option1": "Trinity falling through the air, shooting her gun",
        "option2": "Three giant cables in a mysterious dark land",
        "option3": "Morpheus and the Oracle laughing at him",
        "option4": "Rufus’s time-traveling phone booth",
        "answer": "1"
    }, { //    Question #21
        "question": "21. What visions does Neo have throughout The Matrix Revolutions?",
        "option1": "Trinity falling through the air, shooting her gun",
        "option2": "Three giant cables in a mysterious dark land",
        "option3": "Morpheus and the Oracle laughing at him",
        "option4": "A city bus that will explode if it goes too slowly",
        "answer": "2"
    }, { //    Question #22
        "question": "22. What happens after Neo is resurrected in The Matrix?",
        "option1": "Zion is saved from the sentinels",
        "option2": "He becomes expert in Jujitsu",
        "option3": "Trinity declares her love for him",
        "option4": "He can see the code of the Matrix’s program",
        "answer": "4"
    }, { //    Question #23
        "question": "23. Why does Seraph fight Neo the first time they meet?",
        "option1": "Seraph is really Agent Smith in disguise",
        "option2": "Seraph protects the Merovingian",
        "option3": "Seraph wants to confirm that Neo is the One",
        "option4": "The Oracle prophesied Seraph’s passive-aggressive streak",
        "answer": "4"
    }, { //    Question #24
        "question": "24. Who has agreed to care for Sati?",
        "option1": "The Oracle",
        "option2": "Trinity",
        "option3": "The Trainman",
        "option4": "Seraph",
        "answer": "4"
    }, { //    Question #25
        "question": "25. When the machines run the planet, for what purpose do they use the humans?",
        "option1": "Manual labor",
        "option2": "Energy",
        "option3": "Experiments",
        "option4": "Karaoke",
        "answer": "2"
    }
                ];