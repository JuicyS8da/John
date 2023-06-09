var getScrollBarSize = (function() {
  var el = window.document.createElement('textarea'), style = {
    'visibility': 'hidden', 'position': 'absolute', 'zIndex': '-2147483647',
    'top': '-1000px', 'left': '-1000px', 'width': '1000px', 'height': '1000px',
    'overflow': 'scroll', 'margin': '0', 'border': '0', 'padding': '0'
  }, support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

  for (var key in style) {
    if (style.hasOwnProperty(key)) {
      el.style[key] = style[key];
    }
  }

  return function() {
    var size = null;
    if (support && window.document.body) {
      window.document.body.appendChild(el);
      size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
      window.document.body.removeChild(el);
    }
    return size;
  };
})();

scrollBarWidthSize = getScrollBarSize()[0];

jQuery(function($) {
  let popupElem = $('.popup');
  let hrefElem = $('.popup-link');
  let popup__content = $('.popup__content');
  let popup__close = $('.popup__close');

  let normalw = $(window).width()
  let scrollw = $(' body ').width()

  hrefElem.click(function(event) {
    event.preventDefault();
    popupElem.addClass('popup-open');
    popup__content.css({
      'transform': 'translate(0px, 0px)',
      'opacity': '1',
      'transition': '.5s',
    });
    $('body').css({
      'height': '100vh',
      'overflow-y': 'hidden',
      'padding-right': scrollBarWidthSize + 'px',
    });
  });
  
  popup__close.click(function() {
    popup__content.css({
      'transform': 'translate(0px, -300%)',
      'opacity': '0',
      'transition': '.5s',
    });
    $('body').css({
      'height': '100%',
      'overflow-y': 'visible',
      'padding-right': '0px',
    })
    popupElem.removeClass('popup-open');
  });
})

var copyEmailBtn = document.querySelector('.popup__emailcopybtn');
var email_copy_check = document.querySelector('#email-copy-check')
var telegram_copy_check = document.querySelector('#telegram-copy-check')

copyEmailBtn.addEventListener('click', function(event) {  
  // Выборка ссылки с электронной почтой 
  var Link = document.querySelector('.popup__emaillink');  
  var range = document.createRange();  
  range.selectNode(Link);  
  window.getSelection().addRange(range);  
    
  try {  
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
    email_copy_check.setAttribute('style', 'display: flex;')
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
});

var copyTelegramBtn = document.querySelector('.popup__telegramcopybtn')

copyTelegramBtn.addEventListener('click', function(event) {  
  // Выборка ссылки с электронной почтой 
  var Link = document.querySelector('.popup__telegramlink');  
  var range = document.createRange();  
  range.selectNode(Link);  
  window.getSelection().addRange(range);  
    
  try {  
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);
    telegram_copy_check.setAttribute('style', 'display: flex;')
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
});

// const hrefElem = document.querySelector('.popup-link');
// const popupElem = document.querySelector('.popup');
// const popup__content = document.querySelector('.popup__content');
// const close_popup = document.querySelector('.close-popup');

// hrefElem.addEventListener('click', function() {
//   popupElem.addClass('popup-open');
//   popup__content.style = 'visibility: visible; opacity: 1;';
// })

// close_popup.addEventListener('click', function() {
//   popupElem.style = 'visibility: hidden; opacity: 0;';
//   popup__content.style = 'visibility: hidden; opacity: 0;';
// })



// //function for class popup-link 
// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener("click", function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const currentPopup = document.getElementById(popupName);
//       popupOpen(currentPopup);
//       e.preventDefault();
//     });
//   }
// }
// //function for class close-popup
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener('click', function (e) {
//       popupCloseIcon(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(currentPopup) {
//   if (currentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     currentPopup.classList.add('open');
//     currentPopup.addEventListener("click", function (e) {
//       if (!e.target.closest('.popup__content')) {
//         popupCloseIcon(e.target.closest('.popup'));
//       }
//     });
//   }
// }