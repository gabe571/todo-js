function newElement() {
    var ul = document.createElement('ul');
    var inputValue =
    document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    ul.appendChild(t);
    if (inputValue === '') {
        alert('Please add a New Task')
    } else {
        document.getElementById('myUL').appendChild(ul);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement ('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    ul.appendChild(span)

    for ( i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
