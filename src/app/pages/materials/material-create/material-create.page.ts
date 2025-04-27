import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHARED_COMPONENTS } from '../../../shared/modules/components';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.page.html',
  styleUrls: ['./material-create.page.scss'],
  standalone: true,
  imports: [IonText, ...SHARED_COMPONENTS]
})
export class MaterialCreatePage implements OnInit {
  materialForm: FormGroup;
  categories = ['Plates', 'Pillars', 'Jacks'];
  materialTypes = ['Steel', 'Iron', 'Aluminum'];
  statuses = ['Available', 'Under Repair'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.materialForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      plateSize: [''],
      materialType: ['', [Validators.required]],
      length: ['', [Validators.required, Validators.min(0)]],
      width: ['', [Validators.required, Validators.min(0)]],
      thickness: ['', [Validators.required, Validators.min(0)]],
      rentalRate: ['', [Validators.required, Validators.min(0)]],
      status: ['Available', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.materialForm.valid) {
      // TODO: Implement save logic
      const toast = await this.toastController.create({
        message: 'Material created successfully!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/materials']);
    } else {
      this.materialForm.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.materialForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) return `${controlName} is required`;
      if (control.errors['min']) return `${controlName} must be greater than 0`;
    }
    return '';
  }
}