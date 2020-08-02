interface TiperOptions {
    text: string;
    hesitation?: number;
    wordsPerMinute?: number;
    pauseTimeout?: number;
    pauseOnSpace?: boolean;
    pauseOnEndOfSentence?: boolean;
    showCaret?: boolean;
    caretType?: string;
    glitch?: boolean;
    onFinishedTyping?: Function;
}
declare class Tiper {
    private container;
    private caretElement;
    private options;
    private typingInterval;
    private glitchInterval;
    private currentTextElement;
    private currentText;
    private currentIndex;
    private typingListener;
    constructor(container: Element, options?: TiperOptions);
    private trim;
    private getTypingSpeed;
    private getCaretCharacter;
    private setCurrentText;
    private setCurrentTextElement;
    private getCurrentText;
    private getTextByRange;
    private getCaretLength;
    private sourceTextIsTargetLength;
    private observeTyping;
    private setFinishedTyping;
    private resetFinishedTyping;
    private updateElementText;
    stopTyping: () => any;
    private pauseTyping;
    private resumeTyping;
    private delay;
    private applyVariation;
    private getCharAt;
    private isEndOfSentence;
    private getShouldPause;
    private insertCurrentChar;
    private activateCaret;
    private deactivateCaret;
    private getRandomArbitrary;
    private createSpan;
    private appendElementToContainer;
    private initializeTextElement;
    private initializeCaret;
    private initializeGlitchEffect;
    private initializeTypingInterval;
    private setElementText;
    private resetElementText;
    private applyGlitch;
    beginTyping: (text?: string, reset?: boolean) => Promise<void>;
    line: (text: string) => Promise<this>;
}
export = Tiper;