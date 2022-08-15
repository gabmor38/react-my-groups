// import { MSGraphClient } from '@microsoft/sp-http';
// import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
// import { WebPartContext } from '@microsoft/sp-webpart-base';
// import { ITeam, ITeamCollection} from '../Models/ICommunities';
// import { GraphRequest } from '@microsoft/microsoft-graph-client';



// export class TeamServiceManager {
//   public context: WebPartContext;

//   public setup(context: WebPartContext): void {
//     this.context = context;
//   }

//   // public getTeams(): Promise<MicrosoftGraph.Team[]> {
//   //   return new Promise<MicrosoftGraph.Team[]>(( resolve, reject ) => {
//   //     try {
//   //       this.context.msGraphClientFactory
//   //       .getClient()
//   //       .then((MSGraphClient: MSGraphClient) => {
//   //         MSGraphClient.api("me")
//   //         .version("v1.0")
//   //         .select("displayName")
//   //         .get((err, res) => {
//   //           if (err) {
//   //             console.log(err);
//   //           }
//   //           console.log("responses", res);
//   //         })
//   //       }

//   public getTeams(): Promise<MicrosoftGraph.Team[]> {
//     return new Promise<MicrosoftGraph.Team[]>(( resolve, reject ) => {
//       try {
//         this.context.msGraphClientFactory
//         .getClient()
//         .then((MSGraphClient: MSGraphClient) => {
//           MSGraphClient.api('me')
//           .version("v1.0")
//           .select("displayName")
//           .get((err, res) => {
//           if (err) {
//             console.log(err);
//           }
//           console.log("response", res)
//         })
//         })
//       }
//     })
//   }
// }

// const TeamService = new TeamServiceManager();
// export default TeamService;
