import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../services/data.service'
import { ScreenLayout } from '../../domain/screenlayout';
import { Seat } from '../../domain/Seat'
import { Book } from '../../domain/Book'
import { SharedserviceService } from '../../services/sharedservice.service'
import { BookingArena } from '../../domain/BookingArena';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Details } from '../../domain/details';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { MatSnackBar } from '@angular/material';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";

//Component decorator

@Component({
	selector: 'seat-list',
	templateUrl: './seat.component.html',
	styleUrls: ['./seat.component.css']
})
export class SeatLayoutComponent implements OnInit {
	//variable declarations
	//private serverUrl = 'https://eventplatform-zuul.stackroute.in/booking-service/booking';
	private serverUrl = 'http://13.127.170.181:10000/booking';
	tokenObtained = localStorage.getItem('currentUser');
	private title = 'WebSockets';
	private stompClient;
	defaultValue = 0;
	type: String;
	position: number;
	noOfRows: number;
	noOfColumn: number;
	ticketPrice: number;
	seatLayoutGold: Seat;
	seatLayoutSilver: Seat;
	loginToken: AuthToken;
	email :string = "";

	type2: String;
	position2: number;
	noOfRows2: number;
	noOfColumn2: number;
	ticketPrice2: number;
	convFee: number = 30;
	totalPrice: number = 0;
	currency: String = "Rs";
	rows: string[];
	cols: number[];
	rows2: string[];
	cols2: number[];
	reserved: string[];
	selected: string[] = [];
	reserved2: string[];
	selected2: string[] = [];
	select: string[];
	cat: string;
	book: Book;
	layout: ScreenLayout;

	screen: number;
	time: String;
	message: string[];
	category: string[] = new Array(2);
	bookingArena: BookingArena;
	details: Details;
	selectedCategory: string;
	totalprice: number;

	GoldClassPrice: number;
	SilverClassPrice: number;
	movieTitle: string;
	showId: string;
	bookingId: string;
	errorMsg: number;
	constructor(private http: HttpClient,
		 private dataservice: DataService,
		 private sharedservice: SharedserviceService,
		 private router: Router,
		 private alerts: AlertsService,
		 private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.showId = params.get('id');
			console.log('showid',this.showId);
		});
		this.initializeWebSocketConnection();
		console.log("ngoninit started");
		this.defaultLoad();
		console.log("defaultload done");
		this.sharedservice.currentMessage.subscribe(message => this.message = message);

		try{
			this.loginToken=jwt_decode(this.tokenObtained);
			console.log('Profile component Token',this.loginToken);
			this.email=this.loginToken.sub;
			console.log('profile component email is',this.email);
			}
		catch(error){
			console.log(error);
			}
		}

	initializeWebSocketConnection() {
		let ws = new SockJS(this.serverUrl);
		this.stompClient = Stomp.over(ws);
		let that = this;
		this.stompClient.connect({}, function (frame) {
			that.stompClient.subscribe("/topic/seat", (message) => {
				console.log('string',message.body);
				 that.bookingArena = JSON.parse(message.body);
				// console.log("data coming from socket", this.bookingArena)
				// this.bookingArena=null;
				console.log(that.noOfRows);
				console.log(that.noOfColumn);

				
				var i: number = 0;
				var j: number = 0;
				that.reserved = [];
				that.reserved2 = []
				console.log("reservved seats are ", that.reserved );
				that.reserved= new Array(that.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList.length); 
				for(i=0;i<that.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList.length;i++){
					if(that.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].bookingSeatStatus==1||that.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].bookingSeatStatus==2){
						that.reserved[j++]=that.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].seatNumber;
					}
				}
				console.log("updated reserved seats are ",that.reserved);
				
				i=0;
				j=0;
				that.reserved2=new Array(that.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList.length)
				for(i=0;i<that.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList.length;i++){
					if(that.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].bookingSeatStatus===1||that.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].bookingSeatStatus===2){
						that.reserved2[j++]=that.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].seatNumber;
					}
				}
				console.log("updated reserved seats are ",that.reserved2);	
			});
		});
	}
	sendMessage(message) {
		console.log("websocket");
		this.stompClient.send("/app/seat", {}, message);
	}

	defaultLoad() {
		console.log("dafualtLoad is getting called ------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

		this.dataservice.getLayout(this.showId)
			.subscribe((data) => {
				this.bookingArena = data;
				console.log("data is ", data);
				this.movieTitle = this.bookingArena.movieTitle;
				this.time = this.bookingArena.showTime;
				this.GoldClassPrice = this.bookingArena.screenLayout.categoryBookingList[0].price;
				this.SilverClassPrice = this.bookingArena.screenLayout.categoryBookingList[1].price;
				this.showId = this.bookingArena.showId;
				this.type = this.bookingArena.screenLayout.categoryBookingList[0].type;
				this.noOfRows = this.bookingArena.screenLayout.categoryBookingList[0].noOfRows;
				console.log("no of rows are ", this.noOfRows);
				this.noOfColumn = this.bookingArena.screenLayout.categoryBookingList[0].noOfColums;
				console.log("no of columns are ", this.noOfColumn);
				this.ticketPrice = this.bookingArena.screenLayout.categoryBookingList[0].price;
				this.type2 = this.bookingArena.screenLayout.categoryBookingList[1].type;
				this.noOfRows2 = this.bookingArena.screenLayout.categoryBookingList[1].noOfRows;
				this.noOfColumn2 = this.bookingArena.screenLayout.categoryBookingList[1].noOfColums;
				console.log("no of column2 ", this.noOfColumn2);
				this.ticketPrice2 = this.bookingArena.screenLayout.categoryBookingList[1].price;
				// console.log('data -> no of rows ', this.layout.Category[0].noOfRows);
				this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].slice(0, this.noOfRows);
				this.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumn);
				this.rows2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'].slice(this.noOfRows, this.noOfRows + this.noOfRows2);
				this.cols2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumn2);
				var i: number = 0;
				var j: number = 0;

				this.reserved = new Array(this.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList.length);
				for (i = 0; i < this.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList.length; i++) {
					if (this.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].bookingSeatStatus == 1||this.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].bookingSeatStatus == 2) {
						this.reserved[j++] = this.bookingArena.screenLayout.categoryBookingList[0].seatLayoutList[i].seatNumber;
					}
				}
				i = 0;
				j = 0;
				this.reserved2 = new Array(this.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList.length)
				for (i = 0; i < this.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList.length; i++) {
					if (this.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].bookingSeatStatus === 1||this.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].bookingSeatStatus === 2) {
						this.reserved2[j++] = this.bookingArena.screenLayout.categoryBookingList[1].seatLayoutList[i].seatNumber;
					}
				}
			});
	}

	// Functions for Seats Of type Gold

	// return status of each seat
	getStatus = function (seatPos: string) {
		if (this.reserved.indexOf(seatPos) !== -1) {
			return 'reserved';
		} else if (this.selected.indexOf(seatPos) !== -1) {
			return 'selected';
		}
	}
	// click handler
	seatClicked = function (seatPos: string) {
		var index = this.selected.indexOf(seatPos);
		//console.log('index is', index);
		if (index !== -1) {
			// seat already selected, remove
			this.selected.splice(index, 1)
		} else {
			// push to selected array only if it is not reserved
			if (this.reserved.indexOf(seatPos) === -1)
				this.selected.push(seatPos);
		}
		this.clear2();
	}


	// Functions for Seats Of type Silver

	//return status of each seat
	getStatus2 = function (seatPos: string) {
		if (this.reserved2.indexOf(seatPos) !== -1) {
			return 'reserved';
		} else if (this.selected2.indexOf(seatPos) !== -1) {
			return 'selected';
		}
	}
	//click handler
	seatClicked2 = function (seatPos: string) {
		var index = this.selected2.indexOf(seatPos);
		if (index !== -1) {
			// seat already selected, remove
			this.selected2.splice(index, 1)
		} else {
			// push to selected array only if it is not reserved
			if (this.reserved2.indexOf(seatPos) === -1)
				this.selected2.push(seatPos);
		}
		this.clear1();
	}

	//clear handler
	clearSelected = function () {
		this.selected = [];
		this.selected2 = [];
	}

	clear1 = function () {
		this.selected = [];
	}

	clear2 = function () {
		this.selected2 = [];
	}

	detailsSelected: Details;

	// Buy button handler
	showSelected = function () {

		console.log(this.errorMsg);
		n: Number;
		this.detailsSelected = new Details();
		this.select = this.selected2.concat(this.selected);
		console.log(this.select);

		if (this.selected.length > 0) {
			this.selectedCategory = "Gold Class";
			this.totalprice = this.selected.length * this.GoldClassPrice;
		}
		else {
			this.selectedCategory = "Silver Class";
			this.totalprice = this.selected2.length * this.SilverClassPrice;
		}

		this.bookingId = Math.floor(((Math.random() + Math.random()) * 10000) + Math.random() * 1000);
		console.log(this.select);
		
		this.detailsSelected.Details(this.email, this.showId, this.select, this.bookingId, this.selectedCategory, this.totalprice);
		console.log(this.detailsSelected);
			this.sendMessage(JSON.stringify(this.detailsSelected));
			this.category[0] = this.movieTitle;
			this.category[1] = this.time;
			this.sharedservice.changeCategory(this.category);
			this.sharedservice.changeDetail(this.detailsSelected);
			this.router.navigate(['booking',this.showId,'checkoutpage','checkout']);
	}
}		