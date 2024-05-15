import React from "react";
import Image from './assets/imagen.jpg' 

function PostList() {
  return (
    <div className="list_container">
      <div className="dot_menu">
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2ZM8 2C8 2.26522 8.10536 2.51957 8.29289 2.70711C8.48043 2.89464 8.73478 3 9 3C9.26522 3 9.51957 2.89464 9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2ZM15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3C16.2652 3 16.5196 2.89464 16.7071 2.70711C16.8946 2.51957 17 2.26522 17 2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="name_image">
        <div className="fondo_imagen">
          <svg
            width="27"
            height="36"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8615 25.4801C26.7703 25.6382 26.6392 25.7695 26.4813 25.8607C26.3234 25.952 26.1442 26 25.9619 26H1.03745C0.855246 25.9998 0.676294 25.9516 0.518568 25.8603C0.360841 25.7689 0.229892 25.6377 0.138869 25.4796C0.0478459 25.3216 -4.6744e-05 25.1423 3.42345e-08 24.9599C4.68125e-05 24.7774 0.0480313 24.5982 0.139135 24.4402C2.11621 21.0178 5.16297 18.5637 8.7186 17.4004C6.95982 16.352 5.59336 14.7546 4.82907 12.8533C4.06477 10.9521 3.9449 8.85221 4.48785 6.87617C5.03081 4.90012 6.20658 3.15716 7.83459 1.91496C9.4626 0.672758 11.4528 0 13.4997 0C15.5465 0 17.5367 0.672758 19.1648 1.91496C20.7928 3.15716 21.9685 4.90012 22.5115 6.87617C23.0545 8.85221 22.9346 10.9521 22.1703 12.8533C21.406 14.7546 20.0395 16.352 18.2808 17.4004C21.8364 18.5637 24.8831 21.0178 26.8602 24.4402C26.9516 24.5982 26.9998 24.7774 27 24.96C27.0002 25.1425 26.9525 25.3219 26.8615 25.4801Z"
              fill="#393939"
            />
          </svg>
        </div>
        <h4>Username</h4>
      </div>
      <div className="comment_post">
        <p className="comentario">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          corrupti illum pariatur eligendi? Ratione nesciunt tempore quis minus?
          Doloremque, illo ut nobis minima totam saepe id alias sequi ipsa!
          Quae?
        </p>
      </div>
      <div className="imagen">
        <img src={Image} alt="" width={500} height={200}/>
      </div>
      <div className="like_replies">
        <div className="like">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 24L11.115 22.2736C4.42 16.1657 0 12.1243 0 7.19346C0 3.15204 3.146 0 7.15 0C9.412 0 11.583 1.0594 13 2.72044C14.417 1.0594 16.588 0 18.85 0C22.854 0 26 3.15204 26 7.19346C26 12.1243 21.58 16.1657 14.885 22.2736L13 24Z"
              fill="#F8F8F8"
            />
          </svg>
          <p className="poption">Me Gusta</p>
        </div>
        <div className="replies">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2 6.76653e-09C19.1948 -6.18827e-05 20.152 0.424429 20.8757 1.18662C21.5995 1.94881 22.0351 2.99108 22.0935 4.10018L22.1 4.35572V7.25953C23.0948 7.25947 24.052 7.68396 24.7757 8.44615C25.4995 9.20834 25.9351 10.2506 25.9935 11.3597L26 11.6152V17.4229C26.0001 18.5339 25.62 19.6029 24.9375 20.4113C24.2551 21.2196 23.3219 21.7061 22.3288 21.7713L22.1 21.7786V23.1811C22.1 24.6621 20.6141 25.4955 19.5598 24.6809L19.435 24.5764L16.4294 21.7786H11.7C10.7417 21.7801 9.81662 21.3861 9.1026 20.6722L8.9206 20.4777L6.5 22.5045C5.4717 23.3655 4.0222 22.6134 3.9078 21.2283L3.9 21.0526V18.8748C2.90523 18.8748 1.94803 18.4503 1.22426 17.6882C0.500491 16.926 0.0648602 15.8837 0.00650015 14.7746L6.05858e-09 14.5191V4.35572C-5.54082e-05 3.2447 0.380023 2.17566 1.06247 1.36732C1.74491 0.558974 2.67814 0.0724392 3.6712 0.0072597L3.9 6.76653e-09H18.2ZM22.1 10.1633H11.7C11.3552 10.1633 11.0246 10.3163 10.7808 10.5886C10.537 10.8609 10.4 11.2302 10.4 11.6152V17.4229C10.4 17.8079 10.537 18.1772 10.7808 18.4495C11.0246 18.7218 11.3552 18.8748 11.7 18.8748H16.4294C17.0375 18.8751 17.6263 19.1135 18.0934 19.5485L19.5078 20.8639C19.5501 20.3211 19.773 19.8157 20.1325 19.4475C20.4921 19.0792 20.9622 18.8749 21.45 18.8748H22.1C22.4448 18.8748 22.7754 18.7218 23.0192 18.4495C23.263 18.1772 23.4 17.8079 23.4 17.4229V11.6152C23.4 11.2302 23.263 10.8609 23.0192 10.5886C22.7754 10.3163 22.4448 10.1633 22.1 10.1633ZM18.2 2.90381H3.9C3.55522 2.90381 3.22456 3.05678 2.98076 3.32906C2.73696 3.60135 2.6 3.97065 2.6 4.35572V14.5191C2.6 14.9041 2.73696 15.2734 2.98076 15.5457C3.22456 15.818 3.55522 15.971 3.9 15.971H4.55C5.06717 15.971 5.56316 16.2004 5.92886 16.6088C6.29455 17.0173 6.5 17.5712 6.5 18.1488V18.8748L7.813 17.7757C7.80445 17.6583 7.80012 17.5406 7.8 17.4229V11.6152C7.8 10.46 8.21089 9.35214 8.94228 8.53529C9.67367 7.71843 10.6657 7.25953 11.7 7.25953H19.5V4.35572C19.5 3.97065 19.363 3.60135 19.1192 3.32906C18.8754 3.05678 18.5448 2.90381 18.2 2.90381Z"
              fill="#F8F8F8"
            />
          </svg>
          <p className="poption">Comentar</p>
        </div>
      </div>
    </div>
  );
}

export default PostList;
