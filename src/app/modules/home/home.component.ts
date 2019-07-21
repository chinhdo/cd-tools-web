import { DataGenService } from './../../shared/utils/data-gen.service';
// declare var require: any;
import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
let shortUuid = require('short-uuid'); // TODO import

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('elGuids') elGuids: ElementRef;

  constructor(private rd: Renderer2) { }

  guids: string[] = [];
  translator: any;
  copiedClass = 'invisible';
  slideDownVisible = false;
  numUuids = 1; // How many Uuids to generate
  generateShort = true;
  theJson = '';

  ngOnInit() {
    this.translator = shortUuid();
    this.generate();
  }

  clear() {
    this.guids = [];
    this.generate();
  }

  copy() {
    const text = this.elGuids.nativeElement.innerText;
    this.copyToClipboard(text);
  }

  generate() {
    for (let i = 0; i < this.numUuids; i++) {
      this.guids.push(this.translator.uuid());
    }
  }

  getShort(uuid: string) {
    return this.translator.fromUUID(uuid);
  }

  scratch() {
    const taxIds = ['205354637', '262647323', '012369526'];
    const data = JSON.parse(this.theJson);
    data.careTeam.forEach((x) => {
      x.taxId = DataGenService.rndItem(taxIds);
    });
    this.theJson = JSON.stringify(data, null, 2);
  }

  addBillingProvider() {
    const data = JSON.parse(this.theJson);
    let idx = 101;
    data.claims.forEach((c) => {
      c['billingProvider'] = {
        professionalNm: c.servicingProvider ? c.servicingProvider.professionalNm : 'NA',
        organizationNm: c.servicingProvider ? c.servicingProvider.organizationNm : 'NA'
      };
      let p = (<any> c).billingProvider;
      p.taxId = idx;
      if (!p.organizationNm) {
        p.organizationNm = p.professionalNm;
      }

      idx ++;
    });

    this.theJson = JSON.stringify(data, null, 2);
  }

  toggleDropdown() {
    this.slideDownVisible = !this.slideDownVisible;
  }

  validate() {
    // Use validation
    if (this.numUuids > 1024) {
      this.numUuids = 1024;
    }
  }

  /**Copy to the clipboard */
  // TODO: Move this to helper
  private copyToClipboard(str: string) {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }

    this.copiedClass = 'fade-out';
    setTimeout(() => { this.copiedClass = 'invisible' }, 500);
  }

  // -----
  // SEARCH CF
  // TODO: move to new component

  searchTerm = '"splunk faqs"';
  searchConfluence() {
    const spaces = [
      'REIMAGINED', 'AR', 'ARVM', 'PAR', '~AB75705', 'AKCP', 'MbrPortalJavaKb', 'PortalJavaKb', 'DOps', 'CKT'
    ];


    if (this.searchTerm) {
      const escaped = this.searchTerm.replace(/\"/g, '\\"');
      let url = 'https://confluence.anthem.com/dosearchsite.action?cql=siteSearch+~+%22';
      url += encodeURI(escaped);
      url += '%22';
      url += '+and+space+in+(';

      let spacesUrl = '';
      for (let i = 0; i < spaces.length; i++) {
        const space = spaces[i];
        spacesUrl += `"${space}"`;
        if (i < spaces.length - 1) {
          spacesUrl += ',';
        }
      }

      url += escape(spacesUrl);

      console.log(spacesUrl);
      // tslint:disable-next-line:max-line-length
      // url += '%22REIMAGINED%22%2C%22AR%22%2C%22ARVM%22%2C%22PAR%22%2C%22~AB75705%22%2C%22AKCP%22%2C%22MbrPortalJavaKb%22%2C%22PortalJavaKb%22%2C%22DOps%22%2C%22CKT%22)';
      url += ')&queryString=' + encodeURI(this.searchTerm);

      window.open(url, '_blank');
    }
  }

  startWatch() {
    const timers = {m1: new Date()};
    sessionStorage.setItem('watch1', JSON.stringify(timers));
  }

  stopWatch() {
    const m2 = new Date();
    const timers = JSON.parse(sessionStorage.getItem('watch1'));

    const m1 = Date.parse(timers.m1);

    const diff = m2.getTime() - m1;
    console.log(diff);
  }
}
