import Inputmask from 'inputmask';
const telInput = document.querySelector('[data-phone-pattern]');
const MIN_TEL_LENGTH = 17;

function setMaskTel() {
  let maskTel = new Inputmask({mask: '+7(999) 999-99-99', placeholder: ''});
  maskTel.mask(telInput);

  telInput.addEventListener('input', () => {
    const valueLength = telInput.value.length;
    if (valueLength < MIN_TEL_LENGTH) {
      telInput.setCustomValidity(`Ещё ${ MIN_TEL_LENGTH - valueLength } симв.`);
    } else {
      telInput.setCustomValidity('');
    }
    telInput.reportValidity();
  });
}

export {setMaskTel};

