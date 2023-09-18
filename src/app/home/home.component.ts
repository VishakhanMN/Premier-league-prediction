import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Score } from '../type';
import { homeTeamData } from '../data';
import { awayTeamData } from '../data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public homeTeam: any;
  public awayTeam: any;
  homeTeamRecord: Score[] = [];
  awayTeamRecord: Score[] = [];
  public homeTeamScore: any;
  public awayTeamScore: any;
  public showOutput: boolean = false;
  public result: any;
  public team: any[] =[];
  public team1: any[] =[];
  public team2: any[] =[];
  public showTeams: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.homeTeamRecord = homeTeamData;
    this.awayTeamRecord = awayTeamData;
    this.showOutput = false;
    this.homeTeamRecord.forEach((team)=>{
      this.team.push(team.name)
    })
    console.log(this.team)
  }


  public predict(): void{

    this.homeTeamScore = this.homeTeamRecord.find(x=>x.name == this.homeTeam);
    this.awayTeamScore = this.awayTeamRecord.find(x=>x.name == this.awayTeam);
    this.showOutput = true;
    this.showTeams = false;
    if((this.homeTeamScore || this.awayTeamScore) == undefined){
      this.result = "Enter valid team names"
    }
    else if(this.homeTeamScore && this.awayTeamScore){
      if(this.homeTeamScore.score >  this.awayTeamScore.score){
        this.result = this.homeTeamScore.name + ' is likely to win against ' + this.awayTeamScore.name;
      }
      else if( this.homeTeamScore.score <  this.awayTeamScore.score){
        this.result = this.awayTeamScore.name + ' is likely to win against ' + this.homeTeamScore.name; 
      }
    }
    
  }

  public showTeam(): void{
    this.showTeams = !this.showTeams;
  }

}
