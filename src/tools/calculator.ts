
export type Day = {
  date: Date,
  lines: Line[]
  final: number
}

export type Line = {
  a: Cell,
  b: Cell,
  c: Cell,
  d: Cell,
  final: number
}

export type Cell = {
  result: number
  remainder: number
}

export class Calculator
{
  public loops: number;
  public days: number;
  private percentA: number;
  private percentB: number;
  private percentC: number;
  private percentD: number;

  constructor() {
    this.loops = 1;
    this.days = 1;
    this.percentA  = 0.1;
    this.percentB  = 0.6;
    this.percentC  = 0.1;
    this.percentD  = 0.2;
  }

  setPercents(percentA: number, percentB: number, percentC: number, percentD: number) {
    this.percentA = percentA
    this.percentB = percentB
    this.percentC = percentC
    this.percentD = percentD
  }

  public calculate = (value: number): Day[] => {
    const result: Day[] = []
    const date = new Date
  
    for (let i = 0; i < this.days; i++) {
      const day = this.calculateDay(value, new Date(date.getDate()))
      value = day.final
      
      result.push(day)
  
      date.setDate(date.getDate()+1);
    }
  
    return result;
  }
  
  private calculateDay = (value: number, date: Date): Day => {
    const day: Line[] = [];
    
    for (let i = 0; i < this.loops; i++) {
      const line = this.calculateLine(value);
      value = line.final;
  
      day.push(line);
    }
  
    return {
      lines: day,
      final: value,
      date,
    };
  };
  
  private calculateLine = (value: number) => {
    const a = this.calculateA(value)
    const b = this.calculateB(a)
    const c = this.calculateC(b)
    const d = this.calculateD(c)
  
    return <Line>{
      a: {
        result: a,
        remainder: value-a,
      },
      b: {
        result: b,
        remainder: a-b,
      },
      c: {
        result: c,
        remainder: b-c,
      },
      d: {
        result: d,
        remainder: c-d,
      },
      final: d
    }
  };

  private calculateA = (value: number): number => value-this.percentage(value, this.percentA);
  private calculateB = (value: number): number => value+this.percentage(value, this.percentB);
  private calculateC = (value: number): number => value-this.percentage(value, this.percentC);
  private calculateD = (value: number): number => value-this.percentage(value, this.percentD);

  private percentage = (value: number, percent: number): number => value / 100 * percent;
}