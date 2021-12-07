import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare const Earth: any;

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  @ViewChild('earthContainer') earthContainer?: ElementRef;
  @Input('pins') pins?: Array<Pin>;
  public earth: any;
  public static isEarthLoaded = false;

  private markers: Array<any> = [];

  constructor() {
    this.initializeEarth = this.initializeEarth.bind(this);
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    if (!this.earthContainer) {
      console.warn('Earth container not found');
      return;
    }
    await this.loadMiniatureEarth();
    this.earth = new Earth(this.earthContainer.nativeElement, {
      location: {lat: 20, lng: this.randomInteger(0,360)},
      mapLandColor: '#ffffff',
      mapSeaColor : '#0e132d',
      mapBorderColor : '#1d2d49',
      mapBorderWidth : 0.4,
      mapImage: 'assets/hologram-map.svg',
      autoRotate: true,
      autoRotateSpeed: 1,
    });
    this.earth.addEventListener('ready', this.initializeEarth);
  }

  initializeEarth() {
    this.earth.startAutoRotate();
    this.updatePins();
  }

  updatePins(): void {
    if (!this.pins)
      return;
    this.markers = [];
    for (const pin of this.pins) {
      const marker = this.earth.addMarker({
        mesh: ['Pin', 'Needle'],
        color: '#4671b2',
        color2: '#969696',
        offset: -0.2,
        location: {lat: pin.coords.lat, lng: pin.coords.long},
        scale: 1,
        visible: true,
        hotspot: true,
        hotspotRadius: 0.4,
        hotspotGeometry: 1.5,
        projectId: pin.id,
      });
      const overlay = this.earth.addOverlay({
        location: {lat: pin.coords.lat, lng: pin.coords.long},
        offset: 3,
        zoomScale: 1,
        depthScale: 0.3,
        className: 'map-name',
        occlude: true,
        projectId: pin.id
      });
      overlay.element.classList.add('map-name');
      overlay.element.innerHTML = `<p>${((pin.newReleaseTag) ? '<span class="new">NEW RELEASE: </span>' : '') + pin.name}</p>`;
      this.markers.push(marker);
    }
  }

  randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  loadMiniatureEarth(): Promise<void> {
    if (GlobeComponent.isEarthLoaded) {
      console.info('Earth already loaded, skipping lib loading ...');
      return Promise.resolve();
    }
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'assets/libs/miniature.earth.js';
      script.onload = () => {
        window.addEventListener('earthjsload', function handler() {
          window.removeEventListener('earthjsload', handler);
          GlobeComponent.isEarthLoaded = true;
          resolve();
        });
      };
      script.onerror = () => {
        reject();
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

}
