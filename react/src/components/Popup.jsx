  import React from 'react';

const Popup = () => (
  <div className="popup">
    <div className="popup__inner">
      <p className="popup__massage">хотите удалить заметку?</p>
      <div className="popup__control">
        <button type='button' className="btn__control">Удалить</button>
        <button type='button' className="btn__control">Отмена</button>
      </div>
    </div>
  </div>
  );

export default Popup;
