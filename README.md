### Hexlet tests and linter status:

[![Actions Status](https://github.com/TanyaAl/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/TanyaAl/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/65f87578306c2de93242/maintainability)](https://codeclimate.com/github/TanyaAl/frontend-project-46/maintainability)
[![Node CI](https://github.com/TanyaAl/frontend-project-46/actions/workflows/NodeJs.yml/badge.svg)](https://github.com/TanyaAl/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65f87578306c2de93242/test_coverage)](https://codeclimate.com/github/TanyaAl/frontend-project-46/test_coverage)
# Difference Calculator

Difference Calculator is a command-line tool that compares two files in JSON or YAML format and displays the differences in a selected format.
## Installation

1. Clone the repository from GitHub to your local machine:

   ```bash
   git clone git@github.com:TanyaAl/genDiff.git
2. Navigate to the cloned directory:

    ```bash
    cd genDiff
3. Make sure Node.js is installed on your computer. 
   Install the utility by running the following command in your terminal:

    ```bash
    make install
## Usage 
The utility supports .json, .yml(or .yaml) input formats and can generate reports in plain text, stylish, and JSON formats.
File paths should be entered with specifying the file extension.
### Stylish (use by default )

    ```bash
    gendiff path_to_your_file path_to_your_another_file
    ```
### Plain

    ```bash
    gendiff -f plain path_to_your_file path_to_your_another_file
    ``` 
### JSON

    ```bash
    gendiff -f json path_to_your_file path_to_your_another_file
    ```
## For more information:

    ```bash
    gendiff -h
    ```
  

[![asciicast](https://asciinema.org/a/630835.svg)](https://asciinema.org/a/630835)
[![asciicast](https://asciinema.org/a/631061.svg)](https://asciinema.org/a/631061)
[![asciicast](https://asciinema.org/a/632355.svg)](https://asciinema.org/a/632355)
[![asciicast](https://asciinema.org/a/632887.svg)](https://asciinema.org/a/632887)
[![asciicast](https://asciinema.org/a/632990.svg)](https://asciinema.org/a/632990)