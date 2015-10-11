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
      yesNoService.getGif(expectedAnswer).then((data : any) => {
        this.imageURL = data.image;
      });
      this.answerText = ('no' === expectedAnswer ? 'HAYIR' : 'EVET');
      this.dialogService = $mdDialog;
    }

    public showAlert(event : MouseEvent){
      this.dialogService.show(
        this.dialogService.alert().title('Ne kadar kaldı? ve Ne kadardır Sürüyor?')
                                  .content('Açık konuşmak gerekirse ne kadar kaldığını bende bilmiyorum. Tek umudum yakın zamanda bitmesi.</p>'+
                                  '<strong>Peki ne kadardır sürüyor?</strong></p>' +
                                  'İlk mail aldığımdan (24 Eylül 2014) bu yana <timer start-time="1411506000000">{{days}} gün, {{hours}} saat, {{minutes}} dakia, {{seconds}} saniye.</timer></p>' +
                                  'Gönderdikleri kod testinden (31 Ekim 2014) bu yana <timer start-time="1414765102000">{{days}} gün, {{hours}} saat, {{minutes}} dakia, {{seconds}} saniye.</timer></p>' +
                                  'Belgradtaki mülakattan (9 Aralık 2014) bu yana <timer start-time="1418127380000">{{days}} gün, {{hours}} saat, {{minutes}} dakia, {{seconds}} saniye.</timer></p>' +
                                  'Kabul Aldığımdan (18 Aralık 2014) bu yana <timer start-time="1418897656000">{{days}} gün, {{hours}} saat, {{minutes}} dakia, {{seconds}} saniye.</timer></p>' +
                                  'Teklif Aldırığımdan (13 Temmuz 2015) bu yana <timer start-time="1436771720000">{{days}} gün, {{hours}} saat, {{minutes}} dakia, {{seconds}} saniye.</timer></p>')
                                  .ariaLabel('Summary')
                                  .ok('Hımm...')
                                  .targetEvent(event)
                                  .clickOutsideToClose(true)
      );
    }
  }
}
