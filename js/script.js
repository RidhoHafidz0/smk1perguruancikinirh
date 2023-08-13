// Toggle class active untuk hamburger menu
const  navbarNav = document.querySelector('.navbar-nav')
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Modal Box DKV
const itemDetailModal = document.querySelector('#item-detail-modal-dkv');
const itemDetailButtons = document.querySelectorAll('.item-detail-button-dkv');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// Modal Box RPL
const itemDetailModalRPL = document.querySelector('#item-detail-modal-rpl');
const itemDetailButtonsRPL = document.querySelectorAll('.item-detail-button-rpl');

itemDetailButtonsRPL.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalRPL.style.display = 'flex';
    e.preventDefault();
  };
});

// Modal Box TKJ
const itemDetailModalTKJ = document.querySelector('#item-detail-modal-tkj');
const itemDetailButtonsTKJ = document.querySelectorAll('.item-detail-button-tkj');

itemDetailButtonsTKJ.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTKJ.style.display = 'flex';
    e.preventDefault();
  };
});

// Modal Box TP
const itemDetailModalTP = document.querySelector('#item-detail-modal-tp');
const itemDetailButtonsTP = document.querySelectorAll('.item-detail-button-tp');

itemDetailButtonsTP.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTP.style.display = 'flex';
    e.preventDefault();
  };
});

// Modal Box TKR
const itemDetailModalTKR = document.querySelector('#item-detail-modal-tkr');
const itemDetailButtonsTKR = document.querySelectorAll('.item-detail-button-tkr');

itemDetailButtonsTKR.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTKR.style.display = 'flex';
    e.preventDefault();
  };
});

// Modal Box TEI
const itemDetailModalTEI = document.querySelector('#item-detail-modal-tei');
const itemDetailButtonsTEI = document.querySelectorAll('.item-detail-button-tei');

itemDetailButtonsTEI.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTEI.style.display = 'flex';
    e.preventDefault();
  };
});



// klik tombol close modal
document.querySelector('.modal .close-icon-dkv').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

/* RPL close*/
document.querySelector('.modal .close-icon-rpl').onclick = (e) => {
  itemDetailModalRPL.style.display = 'none';
  e.preventDefault();
};

/* TKJ close*/
document.querySelector('.modal .close-icon-tkj').onclick = (e) => {
    itemDetailModalTKJ.style.display = 'none';
    e.preventDefault();
  };

/* TP close*/
document.querySelector('.modal .close-icon-tp').onclick = (e) => {
    itemDetailModalTP.style.display = 'none';
    e.preventDefault();
  };

/* TKR close*/
document.querySelector('.modal .close-icon-tkr').onclick = (e) => {
    itemDetailModalTKR.style.display = 'none';
    e.preventDefault();
  };

/* TEI close*/
document.querySelector('.modal .close-icon-tei').onclick = (e) => {
    itemDetailModalTEI.style.display = 'none';
    e.preventDefault();
  };



// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
 
/* RPL ldlm*/
window.onclick = (e) => {
  if (e.target === itemDetailModalRPL) {
    itemDetailModalRPL.style.display = 'none';
  }
};

/*TKJ ldlm*/
window.onclick = (e) => {
    if (e.target === itemDetailModalTKJ) {
      itemDetailModalTKJ.style.display = 'none';
    }
  };

/*TP ldlm*/
window.onclick = (e) => {
    if (e.target === itemDetailModalTP) {
      itemDetailModalTP.style.display = 'none';
    }
  };

/*TKR ldlm*/
window.onclick = (e) => {
    if (e.target === itemDetailModalTKR) {
      itemDetailModalTKR.style.display = 'none';
    }
  };

/*TEI ldlm*/
window.onclick = (e) => {
    if (e.target === itemDetailModalTEI) {
      itemDetailModalTEIss.style.display = 'none';
    }
  };


