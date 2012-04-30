var s = window.getSelection().toString();
var st = document.createElement('script');
st.src = 'http://localhost:3000/quotes/from_url?q=' + encodeURIComponent(s);
st.onload = function() {
  alert('weee')
};
var h = document.getElementsByTagName('HEAD')[0];
h.appendChild(st);