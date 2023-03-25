import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

const PowerBI = () => {
  return (
    <>
      <div className="Appp">
        <header className="Appp-header">
          <PowerBIEmbed
            embedConfig={{
              type: "report", // Supported types: report, dashboard, tile, visual and qna
              id: "c2f2fa04-1877-4ee3-b3ca-593143878219",
              embedUrl:
                "https://app.powerbi.com/reportEmbed?reportId=c2f2fa04-1877-4ee3-b3ca-593143878219&groupId= 0129d8a9-1672-4418-907f-06d1e9b5b9a3",
              accessToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDdiNTVmMWItMjE2ZS00NjIxLTk1MGYtYTBkMjY4YjJhNmIwLyIsImlhdCI6MTY3NzIyMDk5NywibmJmIjoxNjc3MjIwOTk3LCJleHAiOjE2NzcyMjU3NDMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFxMFBqTjNVdmpSamtwNmkwVGJObTBWaEI3SzRPK2xBVHRyc0FIeklQS0xHdy9WSGFNMjEwdGlWK0d5K1lYNVRPIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjAyMDA4OGJjLTUyMmUtNDZiYy04MjE5LTJmNzA4MzU5ODNhNiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiQ2hhdWhhbiIsImdpdmVuX25hbWUiOiJSYWpiaXIiLCJpcGFkZHIiOiI0NC4yMDIuMjIzLjIxOSIsIm5hbWUiOiJSYWpiaXIgQyIsIm9pZCI6ImE0NjJhZTVlLWMxMTctNGZlMy1iZjE5LWIwOTM0ZmUxNmVhNiIsInB1aWQiOiIxMDAzMjAwMjY3QjZGRjYwIiwicmgiOiIwLkFVb0FHMS0xQjI0aElVYVZENkRTYUxLbXNBa0FBQUFBQUFBQXdBQUFBQUFBQUFDSkFFRS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJjV0V5c1Q2Y0FUSG9oUUNDaFRnTTQzMmdZRGprdEo0d2x4VGNfSjZ0WTQ0IiwidGlkIjoiMDdiNTVmMWItMjE2ZS00NjIxLTk1MGYtYTBkMjY4YjJhNmIwIiwidW5pcXVlX25hbWUiOiJSYWpiaXIuQ0BzaGFycGVtYmVkdGVzdC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJSYWpiaXIuQ0BzaGFycGVtYmVkdGVzdC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiI3bUZIN21XRWxrZVoxUDN0ZWFWV0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJhOWVhODk5Ni0xMjJmLTRjNzQtOTUyMC04ZWRjZDE5MjgyNmMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4tR0IifQ.Z2iX84lcOsKLEXlIwXxHcgbribfcS5M0eY0iN1ULlnRVKOAbJPl4wuSoQLj1vtJJ3DGodnfxhpqvLGYVZQ6ZGr2LLS4fviWMl0G4ooSvrQnw7iFFQEgbKMlsM8zCXIyVJEEYMSoCcCK19y6sD2uidIkRxD_m0OrZqS_IY02PKR81kxj9oiACCV6NseXVQyCKOw2ZDGtjWK0lqHTsyveTAL4RcMLTClEjeseiKkgsfUFxJI_rwGuxDhIRjUzdEZuv44Ob3p7ZICoXivZC6KOxQ2V0pm6rVzwCJa794ZZR1tQ9FMsUk2LczLE703px2w3hHDPrHR5a1DhvxN-fweqFyQ",
              tokenType: models.TokenType.Aad,
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: true,
                  },
                },
              },
            }}
            eventHandlers={
              new Map([
                [
                  "loaded",
                  function () {
                    console.log("Report loaded");
                  },
                ],
                [
                  "rendered",
                  function () {
                    console.log("Report rendered");
                  },
                ],
                [
                  "error",
                  function (event) {
                    console.log(event.detail);
                  },
                ],
              ])
            }
            cssClassName={"Embed-container"}
            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          />
        </header>
      </div>
    </>
  );
};

export default PowerBI;
