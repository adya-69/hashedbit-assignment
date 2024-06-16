document.getElementById('colorchange').addEventListener('click', () => {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

document.getElementById('fontsize').addEventListener('input', () => {
    const size = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = `${size}px`;
});

document.getElementById('underline').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

document.getElementById('italic').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('bold').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

document.getElementById('list').addEventListener('change', () => {
    const font = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = font;
});

document.getElementById('getstyle').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    const styles = window.getComputedStyle(textContainer);

    const color = styles.color;
    const fontSize = styles.fontSize;
    const textDecoration = styles.textDecorationLine; // Changed from textDecoration
    const fontStyle = styles.fontStyle;
    const fontWeight = styles.fontWeight;
    const fontFamily = styles.fontFamily;

    const cssProps = `color: ${color}; font-size: ${fontSize}; text-decoration: ${textDecoration}; font-style: ${fontStyle}; font-weight: ${fontWeight}; font-family: ${fontFamily};`;

    document.getElementById('css-props').innerText = cssProps;
});
