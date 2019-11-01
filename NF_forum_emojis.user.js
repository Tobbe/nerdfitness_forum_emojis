// ==UserScript==
// @name         NerdFitness forum emojis
// @namespace    https://github.com/tobbe
// @version      0.2
// @description  Emojis for use on the NF forums
// @author       Tobbe Lundberg
// @match        https://rebellion.nerdfitness.com/index.php?/topic/*
// @match        https://rebellion.nerdfitness.com/index.php?/forum/*/&do=add
// @exclude      https://rebellion.nerdfitness.com/index.php?/topic/*&do=embed
// @exclude      https://rebellion.nerdfitness.com/index.php?/topic/*&do=embed&*
// @grant        none
// ==/UserScript==

function insertImage(src, alt) {
    const imageHtml = '<img data-cke-saved-src="' + src + '" src="' + src + '" alt="' + alt + '">';

    const anchorNode = getSelection().anchorNode;
    const editors = Object.values(window.CKEDITOR.instances);

    const editor = editors.find(editor => editor.editable().$.contains(anchorNode));

    editor.insertHtml(imageHtml, 'unfiltered_html');
}

(function() {
    'use strict';

    function appendImg(element, name, src) {
        const id = '_' + Math.random().toString(36).substr(2, 9) + '_';
        const containerDiv = document.createElement('span');
        containerDiv.className = 'emoji-container';
        const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', name);
        img.setAttribute('title', name);
        img.onclick = () => insertImage(src, name);
        img.id = id
        containerDiv.appendChild(img);

        element.appendChild(containerDiv);
    }

    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed;
        width: 100px;
        height: 200px;
        top: 100px;
        right: 0;
        border: 1px solid black;
        background-color: rgba(135, 206, 250, 0.3);
        z-index: 30000;
    `;
    div.id = 'emoji-bar';
    document.body.appendChild(div);

    appendImg(div, 'Thumbs Up', 'https://i.imgur.com/SyBNiWx.png');
    appendImg(div, 'Vomit', 'https://i.imgur.com/0zZO3Vz.png');
    appendImg(div, 'Shrug', 'https://i.imgur.com/coaLGWL.png');
    appendImg(div, 'Hug', 'https://i.imgur.com/tbRniFi.png');
    appendImg(div, 'Strong', 'https://i.imgur.com/X6ZKbOO.png');
    appendImg(div, 'Weight Lifting', 'https://i.imgur.com/4OHBWJ9.png');
    appendImg(div, 'Thinking', 'https://i.imgur.com/tjDxdYl.png');
    appendImg(div, 'Plate', 'https://i.imgur.com/qwCJ0K4.png');
    appendImg(div, 'Fire', 'https://i.imgur.com/QZH0gwD.png');
    appendImg(div, 'Rolling on the Floor Laughing', 'https://i.imgur.com/DGB6wKK.png');
    appendImg(div, 'Yummy', 'https://i.imgur.com/sDOcBS5.png');
    appendImg(div, 'Note', 'https://i.imgur.com/vJrNCMo.png');
    appendImg(div, 'Running', 'https://i.imgur.com/mMsKd8u.png');
    appendImg(div, 'Book', 'https://i.imgur.com/JhvxQlU.png');
    appendImg(div, 'Blush', 'https://i.imgur.com/bIksj8K.png');
    appendImg(div, 'Love Eyes', 'https://i.imgur.com/z9Ejuii.png');
    appendImg(div, 'Cry', 'https://i.imgur.com/NuOz8aE.png');
    appendImg(div, 'Bomb', 'https://i.imgur.com/25tmYNs.png');
    appendImg(div, 'Lab tube', 'https://i.imgur.com/9hgp1JX.png');
    appendImg(div, 'Sweden', 'https://i.imgur.com/pNSnuMc.png');
    appendImg(div, 'Star', 'https://i.imgur.com/G4X1TOL.png');
    appendImg(div, 'Medal', 'https://i.imgur.com/mVwiKqY.png');
    appendImg(div, 'Poo', 'https://i.imgur.com/6QUVSkH.png');
    appendImg(div, 'Check', 'https://i.imgur.com/n2GokI9.png');
    appendImg(div, 'Heart', 'https://i.imgur.com/D2iaBJL.png');
    appendImg(div, 'Mountain', 'https://i.imgur.com/tBDF9TE.png');
    appendImg(div, 'OK', 'https://i.imgur.com/nqgJbvd.png');
    appendImg(div, 'Pointing Finger', 'https://i.imgur.com/Trynytm.png');
})();
