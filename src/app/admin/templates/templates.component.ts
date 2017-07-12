import {Component, OnInit} from '@angular/core';
import { TemplatesService } from './templates.service';
import { PicturesService } from '../generic-photos/pictures.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  private templates: {id: number, name: string, model: string, main_img: string}[] = [];
  private names: string[];
  private selectedName: string;
  constructor(
    private templatesService: TemplatesService,
    // private router: Router,
    // private route: ActivatedRoute // Our currently active route
  ) { }

  ngOnInit() {
    this.templates = this.templatesService.getTemplates('All');
    this.names = this.templatesService.getNames();
    this.selectedName = 'All';
  }
  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
  onDeleteTemplate(id) {
    this.templatesService.deleteTemplate(id);
  }
  onSelectName(name) {
    this.templates = this.templatesService.getTemplates(name);
    this.selectedName = name;
  }

}
