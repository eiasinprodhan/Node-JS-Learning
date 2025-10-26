import { Component, OnInit } from '@angular/core';
import { Address } from '../../model/address.model';
import { AddressService } from '../../services/address.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-address',
  imports: [

    CommonModule
  ],
  templateUrl: './all-address.html',
  styleUrl: './all-address.css',
})
export class AllAddress implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.loadAddresses();
  }

  addresses: Address[] = [];

 loadAddresses() {
  this.addressService.getAllAddresses().subscribe({
    next: (data) => {
      this.addresses = data;
      console.log('Fetched address data:', data); // 👈 print data here
    },
    error: (err) => console.error('Error fetching addresses:', err)
  });
}

}