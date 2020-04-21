export interface Project{
  _id: string;
  name: string;
  date: Date;
  description: string;
  url: string;
  tools: Tool[];
  backgroundColor: string;
  descriptionColor: string;
  imageUrl: string;


}
export interface Tool {
  _id: string;
  name: string;
}
