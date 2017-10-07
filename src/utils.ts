'use strict';

export function indent(depth: number, size?: number, str?: string): string {
    return (str || ' ').repeat(depth * (size || 2));
}

export function styleToElm(value: string): string[] {
    let valueArray = value.split(/\s*;+\s*/g).filter((s) => !!s.length);
    return valueArray.map((s) => {
        let arr = s.split(/\s*:\s*(.+)/).filter((s) => !!s.length);
        return '( "' + arr.join('", "') + '" )';
    });
}

export function sanitizeHtml(value: string): string {
    return collapseSpaces(value);
}

function collapseSpaces(value: string): string {
    let
        regex = /(\s{2,}|\n)/gm,
        collapsedValue = value.replace(regex, ' ');

    return collapsedValue;
}


export function ariaToAttributes(value: string): string {
    let
        regex = /(aria-.+?)\s/gm,
        ariaAsAttributes = value.replace(regex, 'attribute "$1" ');

    return ariaAsAttributes;
}

export function dataToAttributes(value: string): string {
    let
        regex = /(data-.+?)\s/gm,
        dataAsAttributes = value.replace(regex, 'attribute "$1" ');

    return dataAsAttributes;
}

export function fixTypeDeclaration(value: string): string {
    return value.replace(/type'/, "type_");
}