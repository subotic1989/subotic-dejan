import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  form: FormGroup;
  showDialog: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null],
      content: [null],
    });
  }

  onSubmit() {
    this.http
      .post('https://formspree.io/f/mgednjva', this.form.value)
      .subscribe(() => {
        this.showDialog = true;
        this.form.reset();
        setTimeout(() => {
          this.showDialog = false;
        }, 3000);
      });
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  toWork() {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  toNav() {
    const element = document.getElementById('header') as HTMLElement;
    const headerOffset = 145;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
