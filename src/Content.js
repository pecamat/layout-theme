import "./App.css";
import React from "react";

function Content({ isFull }) {
  const widthClass = isFull === false ? "content-gap" : "";
  console.log(widthClass);

  return (
    <div className={`content ${widthClass}`} >
      <p>
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on
        the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
      </p>
      <p style={{display: "block"}}>
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
        elievable. If you are going to use a passage of Lorem Ipsum, you need to
        be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
      </p>
    </div>
  );
}

export default Content;
