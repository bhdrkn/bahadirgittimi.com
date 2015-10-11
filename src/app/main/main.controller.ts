module bahadirgittimi {
  'use strict';

  export class MainController {
    public awesomeThings: string[];
    public imageURL : string;
    public answerText : string;

    /* @ngInject */
    constructor (yesNoService : YesNoService, expectedAnswer : string) {
      this.awesomeThings = new Array();
      yesNoService.getGif(expectedAnswer).then((data : any) =>{
        this.imageURL = data.image;
      });
      this.answerText = ('no' === expectedAnswer ? 'HAYIR' : 'EVET');
    }
  }
}
