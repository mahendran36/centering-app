import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../core/services/order.service';
import { MaterialService } from '../../core/services/material.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.page.html',
  styleUrls: ['./order-create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OrderCreatePage implements OnInit {
  constructor(
    private orderService: OrderService,
    private materialService: MaterialService
  ) {}

  ngOnInit() {}
}