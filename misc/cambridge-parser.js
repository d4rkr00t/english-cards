var $entries = document.querySelectorAll('.entry-body__el');
var $visibleEntries = Array.prototype.filter.call($entries, e => e.offsetWidth);
var result = $visibleEntries.map(getDataFromEntry);

function getInnerTexts($e) {
    return Array.prototype.map.call($e, e => e.innerText);
}

function getDefinition($def) {
    var meaning = ($def.querySelector('.def') || {}).innerText.replace(/:$/, '');
    var $examples = ($def.querySelectorAll('.examp .eg') || []);
    return {
        meaning: meaning,
        examples: getInnerTexts($examples)
    };
}

function getSensBlockInfo(bl) {
    var $defs = (bl.querySelectorAll('.def-block') || []);
    return Array.prototype.map.call($defs, getDefinition);
}

function getDataFromSimpleEntry(e) {
    var partOfSpeach = (e.querySelector('.pos') || {}).innerText;
    var $blocks = (e.querySelectorAll('.sense-block') || []);
    var $extraexamples = (e.querySelectorAll('.extraexamps .eg') || []);
    return {
        partOfSpeach: partOfSpeach,
        definitions: Array.prototype.reduce.call($blocks, (acc, bl) => {
            var defs = getSensBlockInfo(bl);
            return acc.concat(defs);
        }, []),
        examples: getInnerTexts($extraexamples),
    };
}

function getDataFromIdiom(e) {
    var $examples = (e.querySelectorAll('.examp .eg') || []);
    return {
        partOfSpeach: 'idiom',
        definitions: [{
            meaning: e.querySelector('.def').innerText,
            examples: getInnerTexts($examples)
        }]
    };
}

function getDataFromEntry(e) {
    var isIdiom = e.querySelector('.idiom-block');

    return isIdiom
        ? getDataFromIdiom(e)
        : getDataFromSimpleEntry(e);
}

console.log(result);
copy(result);
