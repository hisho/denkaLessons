# denkaLessons
でんかじゅく

# [https://hisho.github.io/denkaLessons/](https://hisho.github.io/denkaLessons/)



## ディレクトリ構造
 * * *

```text
root
├── README.md
├── assets
│   ├── css
│   │   ├── flex1.css
│   │   ├── flex2.css
│   │   ├── float.css
│   │   ├── grid.css
│   │   └── style.css
│   │
│   ├── img
│   │   ├── cat01.jpg
│   │   ├── cat02.jpg
│   │   ├── cat03.jpg
│   │   ├── cat04.jpg
│   │   ├── cat05.jpg
│   │   ├── cat06.jpg
│   │   ├── cat07.jpg
│   │   └── cat08.jpg
│   │
│   └── js
│　　　　 ├── jquery-match-height.js
│   　   ├── jquery.min.js
│   　   ├── main.js
│　　　　 └── test.js
│
├── card
│   　├── card.js
│   　└── data.js
│
├── index.html
│
├── camp
│ 　　 └── design.xd
│
└── scss
　　　 └── style.scss
```


## CSSの解説
 * * *

```text
root
 ├── assets
 │   └── css
 │        ├── flex1.css
 │        ├── flex2.css
 │        ├── float.css
 │        ├── grid.css
 │        └── style.css
 │
 └── scss
 　    └── style.scss
```


<dl>
  <dt>float.css</dt>
  <dd>フロートで作ったバージョンのCSS</dd>
  <dt>grid.css</dt>
  <dd>CSSgridで作ったバージョンのCSS</dd>
  <dt>style.css</dt>
  <dd>リセットCSSその他レイアウトが載っているCSS</dd>
  <dt>flex1.css</dt>
  <dd>今回使うCSSその1</dd>
  <dt>flex2.css</dt>
  <dd>今回使うCSSその2</dd>
  <dt>style.scss</dt>
  <dd>style.cssの元データ</dd>
</dl>


## JavaScriptの解説
 * * *

```text
root
 ├── js
 │    ├── jquery-match-height.js
 │    ├── jquery.min.js
 │    ├── main.js
 │    └── test.js
 │
 └── card
　　　　├── card.js
　　　　└── data.js
```

<dl>
  <dt>jquery.min.js</dt>
  <dd>jQuery本体</dd>
  <dt>jquery-match-height.js</dt>
  <dd>floatで高さを揃えるjsのライブラリ(jQuery依存)</dd>
  <dt>main.js</dt>
  <dd>jquery-match-height.jsの設定が書いてあるjs</dd>
  <dt>test.js</dt>
  <dd>お試しで作ったjs</dd>
  <dt>data.js</dt>
  <dd>card.jsのObjectデータが入ったjs</dd>
  <dt>card.js</dt>
  <dd>cardをhtmlに吐き出すjs</dd>
</dl>

## 画像の解説
 * * *

```text
root
 └── img
      ├── cat01.jpg
      ├── cat02.jpg
      ├── cat03.jpg
      ├── cat04.jpg
      ├── cat05.jpg
      ├── cat06.jpg
      ├── cat07.jpg
      └── cat08.jpg
```

### 大きさ色々なかわいい猫の画像たち
> <https://www.pexels.com/cats/>

## 今回のハンズオンで使うhtml
 * * *

```html
<section class="section2"><!-- flex1 start -->
  <h1>flex1</h2>
  <ul class="container">
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
  </ul>
</section><!-- flex1 end. -->
```

```html
<section class="section3"><!-- flex2 start -->
  <h1>flex2</h2>
  <ul class="container">
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
      <li class="item">
        <!-- <div class="card"></div> -->
      </li>
  </ul>
</section><!-- flex2 end. -->
```

この**section2**,**section3**の中の更に

```html
<ul class="container">
  <li class="item">
    <!-- <div class="card"></div> -->
  </li>
</ul>
```

主にこの部分

## Cardの部分
***

```html
<!-- <div class="card"></div> -->
```

ここのコメントアウトを解除すると

```html
<script src="./card/data.js" defer></script>
<script src="./card/card.js" defer></script>
```

によって

```html
<div class="card">
  <div class="card__img"><img src="assets/img/cat○○.jpg" alt=""></div>
  <h2 class="card__title">タイトル</h2>
  <p class="card__text">本文</p>
  <a class="card__btn" href="#">ボタン</a>
</div>
```

が展開されます
