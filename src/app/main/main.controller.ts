module bahadirgittimi {
  'use strict';

  export class MainController {
    public awesomeThings: string[];
    public imageURL : string;
    public answerText : string;

    private dialogService : ng.material.IDialogService;

    /* @ngInject */
    constructor (yesNoService : YesNoService, expectedAnswer : string, $mdDialog : ng.material.IDialogService) {
      this.awesomeThings = new Array();
      yesNoService.getGif(expectedAnswer).then((data : any) =>{
        this.imageURL = data.image;
      });
      this.answerText = ('no' === expectedAnswer ? 'HAYIR' : 'EVET');
      this.dialogService = $mdDialog;
    }

    public showAlert(event : MouseEvent){
      this.dialogService.show(
        this.dialogService.alert().title('Yakında...')
                                  .content('Tüm tarihler burada özetlenece...')
                                  .ariaLabel('Summary')
                                  .ok('Hımm...')
                                  .targetEvent(event)
                                  .clickOutsideToClose(true)
      );
    }
  }
}
