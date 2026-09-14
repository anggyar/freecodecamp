# Implement a Pig Latin Translator

Pig Latin is a way of altering English words by following specific transformation rules.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a translatePigLatin function that accepts one string as argument.
If the string argument begins with a consonant, your function should take the first consonant or consonant cluster, move it to the end of the word, add ay to it, and return the result.
If the string argument begins with a vowel, your function should add way at the end and return the result.
Your function should handle string arguments where the first vowel comes in the middle of the word and return the appropriately transformed string.
If the string argument has no vowels, your function should add ay at the end and return the result.
Note: For the context of this lab, vowels are a, e, i, o, and u. The letter y is not considered a vowel.
