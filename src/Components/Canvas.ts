class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private width: number;
  private height: number;

  constructor({
    canvasId,
    width,
    height,
  }: {
    canvasId: string;
    width?: number;
    height?: number;
  }) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error("캔버스 엘리먼트를 찾을 수 없습니다.");
    }
    this.context = this.canvas.getContext("2d");
    this.width = width ?? window.innerWidth;
    this.height = height ?? window.innerHeight;

    this.setupCanvas();
  }

  private setupCanvas(): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  getContext() {
    return this.context;
  }
  getCanvas() {
    return this.canvas;
  }
}
export default Canvas;
