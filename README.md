# [JSL01] Submission: Syntax-Engine Interaction Challenge

Imagine you are building a virtual pet adoption website, and you need to create a JavaScript function that checks if the user has entered valid pet adoption details. Write a function that takes a string as input and validates if it follows a specific syntax, such as starting with "pet_" followed by a combination of letters and numbers. If the input follows the syntax, return "Valid Syntax," otherwise, return "Invalid Syntax."

![alt text](jsl_01_final_result.gif)

## Challenge Overview
I had fun with this challenge. We had to use string manipulation to ensure we were only accepting valid data within our input field.
My previous experience with python involved a lot of string manipulation, so I was confident going into this challenge. I considered initially iterating over each character in the string and adding them to an array, which I would then
apply various checks to, but in the end I decided on using the substring method in Javascript to break the string down into 3 components, a prefix, a petYear, and a name.

I did some googling as my first instinct was to define new strings using similar notation from python, ie newstring = string[4:] which would define a new string consisting of the 4th character, on to the end. I found the substring method which seemed to be exactly what I was thinking of. After this the only challenge would be to define the criteria we would check against. Again, Google and StackOverflow lead me to regular expressions and assertions, such as "/^[A-Za-z]+$/". What we have described here is a regular expression containing uppercase letters from A-Z and lowercase letters from a-z. The notation is as follows:
/ We open the regex with the forward slash, we then define the input boundary beginning with ^ (this is an assertion). [A-Za-z] is our range of characters, or "character class". Our + says we need at least one item from the character class, in this case an uppercase or lowercase letter. The $ is the input boundary end assertion, which means the match must end at the end of the string. The syntax and ease of use of this alongside methods such as test() was effortless to implement. It took a while to fully wrap my head around it, but breaking it up into its individual components and using the MDN Documentation to explain the different assertions/components to me helped a lot.

As for the substrings I settled on, those would be:

1. The prefix, this would be our "pet_". So the plan here would be to create a substring of the first 4 characters of the string and check that it matches what we expect.

2. The pets year. This was more complex because I decided I wanted to add additional layers to ensure realistic dates were inputted. I ended up defined a function that would both check that the next four characters in the string were in fact numbers, and following that, I would check that the numbers themselves equal the year we are currently in, or one before. The idea is to prevent people adding in birth years for pets that have not happened yet, limiting the amount of invalid data we would receive. As I mentioned in my code commments, this is still open to exploitation though, as we would still except values such as 0000 or 1234. I didn't go further with this though as the line between pet and wild animal can get grey. Upon google searching, I found results of pet tortoises over 170 years of age, terrapins of 70+ years, and immortal jellyfish. As such, I left this function as is.

3. All thats left would be to check the name, thus we define a substring consisting of the 8th character of the string onwards, and verify it only consists of uppercase and lowercase letters. Limitations with this are that we are not checking for single character names, and we also have not imposed an upper limit of characters for the string as a whole, meaning we are only being limited by the HTML input tag charcter limit which would be 524288. Again, due to the subjectivity of naming a pet, and since this challenge is just to prove we understand the basics of string manipulation, I didn't go much further into defining stricter data validation rules, although we could always just define a maxlength attribute on our input element which I think would be the easiest solution.

## Final Thoughts
This was a fun challenge and I enjoyed it. String manipulation is always a good exercise, especially when you get strict with what you will and won't allow through the data validation process. This helps you to discover new tools and concepts, as I did today learning about regular expressions, assertions, and the substring method in Javascript.
