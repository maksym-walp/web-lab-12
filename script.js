function testCellPhoneNumber() {
    var str = document.getElementById('phone-number').value.trim();
    var resultElement = document.getElementById('result');

    if (!str.length) {
        resultElement.textContent = "Номер мобільного телефону задано некоректно";
        resultElement.className = 'error';
        return;
    }

    var cellPhoneTemplate = new RegExp("^8?(063|093)[0-9]{7}$");

    if (!cellPhoneTemplate.test(str)) {
        resultElement.textContent = "Номер мобільного телефону задано некоректно";
        resultElement.className = 'error';
    } else {
        resultElement.textContent = "Номер мобільного телефону коректний";
        resultElement.className = 'success';
    }
}


function testPhoneNumber() {
    var str = document.getElementById('phone-number1').value.trim();
    var resultElement = document.getElementById('result1');

    if (!str.length) {
        resultElement.textContent = "Номер телефону задано некоректно";
        resultElement.className = 'error';
        return;
    }

    var phoneTemplate = new RegExp("^2?[0-9]{6}$");

    if (!phoneTemplate.test(str)) {
        resultElement.textContent = "Номер телефону задано некоректно";
        resultElement.className = 'error';
    } else {
        resultElement.textContent = "Номер телефону коректний";
        resultElement.className = 'success';
    }
}


function removeRedundantSpaces(text_for_Editing) {
    var extraSpaces = new RegExp("[ ]{2,}","g");
    return text_for_Editing.replace(extraSpaces," ");
}


function clearTextFromHTMLTags(textForEditing) {
    var tagTemplate = new RegExp("</?[a-zA-Z]+>", "g");
    return textForEditing.replace(tagTemplate, "");
}

function checkWholePositiveNumber(str) {
    var resultElement = document.getElementById('result2');

    if (!str.length) {
        resultElement.textContent = "Це не є допустиме натуральне число!";
        resultElement.className = 'error';
        return;
    }

    var re = new RegExp("[^0-9]", "g");
    str = str.replace(re, "a");

    if (str.indexOf("a") != -1) {
        resultElement.textContent = "Це не є допустиме натуральне число!";
        resultElement.className = 'error';
    } else {
        resultElement.textContent = "Це допустиме натуральне число.";
        resultElement.className = 'success';
    }
}

function changePasswordFieldStyle() {
    var passwordField = document.getElementById('passwordInput');
    passwordField.style.backgroundColor = 'red';
    passwordField.style.color = 'white';
    passwordField.style.fontSize = '10pt';
    passwordField.style.height = '28px';
}

function hideRows() {
    var row1 = document.getElementById('row1');
    var row3 = document.getElementById('row3');

    row1.style.display = 'none'; // Приховує рядок і він перестає займати місце
    row3.style.visibility = 'hidden'; // Приховує рядок, але він зберігає місце
}


function checkForm() {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var textField = document.getElementById('textField').value;
    var dropdown = document.getElementById('dropdown').value;
    var submitButton = document.getElementById('submitButton');

    if (password1 && password2 && password1 === password2 && textField && dropdown !== "0") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function isUkrainianMobilePhoneNumber(phoneNumber) {
    var ukrainianPhoneNumberPattern = /^(050|063|066|067|068|091|092|093|094|095|096|097|098|099)\d{7}$/;
    return ukrainianPhoneNumberPattern.test(phoneNumber);
}

function checkPhoneNumber() {
    var phoneNumberInput = document.getElementById("phoneNumberInput1");
    var resultElement = document.getElementById('result3');
    var phoneNumber = phoneNumberInput.value.trim();

    if (isUkrainianMobilePhoneNumber(phoneNumber)) {
        resultElement.textContent = "Номер мобільного телефону коректний";
        resultElement.className = 'success';

    } else {
        resultElement.textContent = "Номер мобільного телефону задано некоректно";
        resultElement.className = 'error';
    }
}

function isLvivPostcode(postcode) {
    var lvivPostcodePattern = /^[8][0-9]{4}$/;
    return lvivPostcodePattern.test(postcode);
}

function checkPostcode() {
    var postcodeInput = document.getElementById("postcodeInput");
    var postcode = postcodeInput.value.trim();
    var resultElement = document.getElementById('result4');

    if (isLvivPostcode(postcode)) {
        resultElement.textContent = "Введений поштовий індекс належить до Львова";
        resultElement.className = 'success';
    } else {
        resultElement.textContent = "Введений поштовий індекс не належить до Львова";
        resultElement.className = 'error';
    }
}

function isLvivPhoneNumber(phoneNumber) {
    var lvivPhonePattern = /^(\(032\)|032)?-?\d{3}-?\d{2}-?\d{2}$/;
    return lvivPhonePattern.test(phoneNumber);
}

function checkPhoneNumberLviv() {
    var phoneNumber = document.getElementById("phoneNumberInput").value;
    var resultMessage = document.getElementById("result5");

    if (isLvivPhoneNumber(phoneNumber)) {
        resultMessage.textContent = "Введений номер є львівським міським телефонним номером.";
        resultMessage.className = 'success';
    } else {
        resultMessage.textContent = "Введений номер не є львівським міським телефонним номером.";
        resultMessage.className = 'error';
    }
}



function clearTextFromHTMLComments(text_for_Editing) {
    var commentTemplate = new RegExp("<!--.*?-->", "gs");
    return text_for_Editing.replace(commentTemplate, "");
}

function clearHTMLComments() {
    var editor = document.getElementById('editor2');
    editor.value = clearTextFromHTMLComments(editor.value);
}

function clearTags() {
    var editor = document.getElementById('editor3');
    var content = editor.value;

    // <p>, <font>, <br> та <hr>
    content = content.replace(/<p[^>]*>|<\/p[^>]*>|<font[^>]*>|<\/font[^>]*>|<br[^>]*>|<hr[^>]*>/g, '');

    editor.value = content;
}


function trimText() {
    var editor = document.getElementById('editor4');
    var content = editor.value;

    // Видаляємо пробіли на початку та в кінці
    content = content.trim();

    editor.value = content;
}

function checkYear() {
    var yearInput = document.getElementById('yearInput').value;
    var year = parseInt(yearInput);
    var resultElement = document.getElementById('yearresult');


    if (!isNaN(year) && year >= 1900 && year <= 2099) {
        resultElement.textContent = 'Введений рік ' + year + ' є в межах від 1900 до 2099.';
        resultElement.className = 'success';
    } else {
        resultElement.textContent = 'Введений рік ' + yearInput + ' не відповідає умові (1900-2099).';
        resultElement.className = 'error';
    }
}