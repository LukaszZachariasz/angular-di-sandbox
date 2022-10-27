import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Welcome} from './welcome';
import {tap} from 'rxjs/operators';
import {WelcomeQuote} from './welcome-quote';

@Injectable({
  providedIn: 'root'
})
export class UltraWelcomeService implements Welcome {
  public static instanceCounter = 0;

  private static displayWelcomeWithQuote(q: WelcomeQuote) {
    alert(`${'Hello there\n\nRemember that ' + q.author + ' said: \n\n' + q.content}`)
  }

  public instanceNo = ++UltraWelcomeService.instanceCounter;

  constructor(private httpClient: HttpClient) {
    console.table([{
      title: 'UltraWelcomeService',
      instances: this.instanceNo
    }]);
  }

  public sayHello(): void {
    this.getQuote().pipe(
      tap((q: WelcomeQuote) => UltraWelcomeService.displayWelcomeWithQuote(q))
    ).subscribe()
  }

  private getQuote(): Observable<WelcomeQuote> {
    return this.httpClient.get<WelcomeQuote>('https://quotable.io/random');
  }
}
