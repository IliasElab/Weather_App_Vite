import React from "react";

function Temperature() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
      <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
    </svg>
  );
}

function TemperatureMin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z" />
    </svg>
  );
}

function TemperatureMax() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
      <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
    </svg>
  );
}

function Wind() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
}

function Precipitation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
      />
      <path
        fillRule="evenodd"
        d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
      />
    </svg>
  );
}

function Rain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" />
    </svg>
  );
}

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Mail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
}

function Sunrise() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
    </svg>
  );
}

function Moon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
      <g transform="translate(0 -704.762)">
        <g
          stroke="none"
          transform="matrix(3.72022 0 0 3.72022 1129.525 1025.41)"
        >
          <path
            fill="#ccc"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.535"
            d="M-210.45-39.473c0 25.654-20.796 46.45-46.45 46.45-25.654 0-46.45-20.796-46.45-46.45 0-25.654 20.796-46.45 46.45-46.45 25.654 0 46.45 20.796 46.45 46.45z"
          ></path>
          <path
            fill="#999"
            stroke="none"
            d="M-254.165-71.448c-.576-1.729-4.459-5.768-6.469-6.438-.301-.1-.716-.125-1.25-.093-3.738.223-12.339 3.37-13.937 4.968-1.472 2.623-6.863 6.588-8.031 3.563 2.14-4.057 3.548-6.257-4.313-4.375a46.457 46.457 0 00-12.906 19.937c.87 1.903.772 3.46 1.031 4.532 2.25 5.304.044 11.877 4 15.625 4.075.076 3.602 1.602 13.063 1.562 2.296 4.593-4.758 6.125-3.313 11.906.186.743 4.35.6 5.156.438 5.994-1.199 2.975 2.391 6.614 3.301 3.33.832 5.352-5.405 12.616-2.6 1.834-1.223-.323-5.794-.73-7.014-.785-2.356 1.536-7.521 1-8.593-3.018-2.887-6.422-4.288-6.75-8.75 2.033-.798 4.18-1.03 5.782-1.063 3.331-.666-.317-6.562 3.78-6.562 3.802-.644 13.893 2.301 11.234-3.465-1.36-2.266-2.437-3.346-5.452-3.245-2.78-.144-5.852 5.784-7.75 3.585-4.109-2.721-8.793 2.115-13.605 4.717-4.415-1.363-5.713-1.772-6.426-4.592 2.245-2.147 3.286-2.454 8.281-2 2.148-.376 4.314.749 6.469.281 4.507-3.087 9.386-4.006 12.094-8.219 1.008-2.427.617-4.867-.188-7.406zm10.313 14.781c.795 0 4.414-.201 4.718.406.384.768-7.327 7.855-1.437 11.782.887.591 2.622 1.153 3.312 1.843-1.02 8.847.252 6.552 2.875 11.47.624 1.247.022 2.36.844 3.593 3.363 5.044 5.344-2.185 4.75-5.156-.993-4.965-6.757 1.941-6.757-5.587 0-6.7 9.757-2.185 9.757-8.6-3.237-.242-.617-5.557-1.563-6.75-1.244-5.874-5.157-5.675-9.751-3.718-.233-3.315.011-9.036-2.873-11.189-6.079 1.193-7.445-5.661-11.563 2.031-1.548 5.045 3.785 9.765 7.688 9.875zm-39.952 6.197c-.275 1.355-1.82 2.478-3.02 1.991-1.797-.729-2.23-3.118-.908-4.118 1.553-1.176 4.153 1.02 3.928 2.127z"
          ></path>
          <path
            fill="#999"
            stroke="none"
            d="M-222.779-54.956c.93 1.859 3.213 5.275 6.021 3.87 2.487-3.786-1.66-7.416-3.942-8.458-1.219.227-2.587 3.388-2.079 4.588z"
          ></path>
          <path
            fill="#999"
            stroke="none"
            d="M-225.646-35.172c.666 1.332 4.356 3.84 4.73 4.588 1.08 2.159-1.438 4.582-.86 5.161 1.135 1.134 3.464-2.22 3.728-3.01.332-.997 2.231-6.945 1.29-7.886-2.387-2.387-1.129-7.347-4.874-9.318-2.795 1.23-5.483 7.529-4.014 10.465z"
          ></path>
          <path
            fill="#ececec"
            fillOpacity="1"
            stroke="none"
            d="M-261.246-2.64c-.31-2.483-1.483-2.585-4.167-3.686 3.348-.86 4.143-2.907 2.778-5.398 1.714 1.777 3.261 1.266 5.24-1.84-1.2 4.227 1.971 5.251 5.896 5.376-4.276 1.414-5.288 3.36-4.046 5.756-1.955-1.302-3.744-2.357-5.701-.208z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
}

function Sun() {
  return (
    <svg
      className="sunIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.53 75.71"
    >
      <defs>
        <linearGradient
          id="sun-linear-gradient"
          x1="73.16"
          y1="-1.14"
          x2="5.9"
          y2="74.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffba24" />
          <stop offset="1" stop-color="#f50" />
        </linearGradient>
        <radialGradient
          id="sun-radial-gradient"
          cx="399.28"
          cy="20.08"
          r="53.81"
          gradientTransform="matrix(-1, 0, 0, 1, 444.03, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff4c3" />
          <stop offset="0.16" stop-color="#ffe036" />
          <stop offset="1" stop-color="#fa761c" />
        </radialGradient>
        <radialGradient
          id="sun-radial-gradient-2"
          cx="1380.14"
          cy="-1558"
          r="8.08"
          gradientTransform="matrix(-0.84, 1.15, -1.62, -1.31, -1314.19, -3611.54)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.1" stop-color="#fff" stop-opacity="0.85" />
          <stop offset="0.29" stop-color="#fff" stop-opacity="0.59" />
          <stop offset="0.47" stop-color="#fff" stop-opacity="0.38" />
          <stop offset="0.63" stop-color="#fff" stop-opacity="0.22" />
          <stop offset="0.78" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="0.91" stop-color="#fff" stop-opacity="0.03" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="sun-Degradado_sin_nombre_34"
          cx="-2510.76"
          cy="2994.87"
          r="7.79"
          gradientTransform="matrix(-1.17, -1.1, 0.22, -0.73, -3584.37, -529.73)"
        />
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="Calque_2" data-name="Calque 2">
          <g id="OBJECTS">
            <polygon
              points="68.21 61.7 59.83 62.26 58.25 70.51 50.18 68.16 45.87 75.37 39.1 70.4 32.58 75.71 27.91 68.73 19.98 71.48 17.98 63.32 9.58 63.2 10.49 54.85 2.64 51.86 6.36 44.32 0 38.83 6.07 33.02 1.97 25.68 9.66 22.3 8.32 14.01 16.71 13.46 18.29 5.2 26.35 7.55 30.66 0.34 37.44 5.3 43.95 0 48.62 6.98 56.55 4.22 58.55 12.39 66.95 12.51 66.04 20.86 73.89 23.85 70.18 31.39 76.53 36.88 70.47 42.69 74.56 50.02 66.87 53.41 68.21 61.7"
              style={{ fill: "url(#sun-linear-gradient)" }}
            />
            <path
              d="M9.92,37.85A28.35,28.35,0,1,0,38.27,9.51,28.35,28.35,0,0,0,9.92,37.85Z"
              style={{ fill: "url(#sun-radial-gradient)" }}
            />
            <path
              d="M42.59,34.94c-7.22-5.86-10-14.77-6.3-19.92s12.63-4.57,19.85,1.28,10,14.78,6.3,19.92S49.8,40.79,42.59,34.94Z"
              style={{
                mixBlendMode: "overlay",
                fill: "url(#sun-radial-gradient-2)",
              }}
            />
            <path
              d="M13.21,44.12C14.17,41,19,42.28,24.08,47s8.35,11.12,7.4,14.26-5.81,1.83-10.86-2.9S12.26,47.25,13.21,44.12Z"
              style={{
                mixBlendMode: "overlay",
                opacity: 0.4,
                fill: "url(#sun-Degradado_sin_nombre_34)",
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Snow() {
  return (
    <svg
      className="snowIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64.55 73.47"
    >
      <defs>
        <radialGradient
          id="snow-radial-gradient"
          cx="53.35"
          cy="22.08"
          r="62.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#28cbe9" />
          <stop offset="1" stop-color="#0a4fbb" />
        </radialGradient>
      </defs>
      <g id="Calque_2" data-name="Calque 2">
        <g id="OBJECTS">
          <path
            d="M62.83,50.39l-6.72-3.88,2.07-1.2a3.45,3.45,0,1,0-3.44-6l-5.53,3.19-5.11-3a11.78,11.78,0,0,0,0-5.7l5.11-2.94,5.53,3.19a3.45,3.45,0,1,0,3.44-6L56.1,27l6.73-3.88a3.45,3.45,0,0,0-3.45-6L52.66,21v-2.4a3.46,3.46,0,0,0-3.45-3.45h0a3.46,3.46,0,0,0-3.45,3.45V25l-5.11,2.95a12.07,12.07,0,0,0-4.93-2.85V19.17L41.25,16a3.45,3.45,0,0,0-3.45-6l-2.08,1.21V3.45a3.45,3.45,0,1,0-6.89,0v7.76L26.75,10a3.45,3.45,0,1,0-3.45,6l5.53,3.19v5.89a12.14,12.14,0,0,0-4.93,2.85L18.79,25V18.58a3.45,3.45,0,0,0-6.9,0V21L5.17,17.1a3.45,3.45,0,0,0-3.44,6L8.44,27,6.36,28.15a3.45,3.45,0,0,0,3.45,6l5.53-3.19,5.11,2.94a11.78,11.78,0,0,0,0,5.7l-5.11,3-5.53-3.2a3.45,3.45,0,0,0-3.45,6l2.09,1.2L1.73,50.39a3.44,3.44,0,0,0,1.72,6.43,3.34,3.34,0,0,0,1.72-.46l6.72-3.88v2.4a3.45,3.45,0,1,0,6.9,0V48.5l5.11-3a12.17,12.17,0,0,0,4.92,2.85v5.9L23.3,57.49a3.45,3.45,0,1,0,3.45,6l2.08-1.2V70a3.45,3.45,0,1,0,6.89,0V62.26l2.08,1.2a3.39,3.39,0,0,0,1.72.46,3.45,3.45,0,0,0,1.73-6.43L35.72,54.3V48.4a12.14,12.14,0,0,0,4.93-2.85l5.11,3v6.38a3.45,3.45,0,1,0,6.9,0v-2.4l6.72,3.88a3.34,3.34,0,0,0,1.72.46,3.45,3.45,0,0,0,1.73-6.43ZM32.28,42a5.28,5.28,0,1,1,5.28-5.28A5.28,5.28,0,0,1,32.28,42Z"
            style={{ fill: "url(#snow-radial-gradient)" }}
          />
        </g>
      </g>
    </svg>
  );
}

function Cloud() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92.11 65.37"
      className="cloudIcon"
    >
      <defs>
        <radialGradient
          id="cloud-radial-gradient"
          cx="57.67"
          cy="13.78"
          r="70.26"
          gradientTransform="translate(115.34 23.84) rotate(180) scale(1 0.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.2" stop-color="#d5f3ff" />
          <stop offset="1" stop-color="#85bcf1" />
        </radialGradient>
        <radialGradient
          id="cloud-radial-gradient-2"
          cx="1198.4"
          cy="-1619.45"
          r="8.48"
          gradientTransform="matrix(-0.84, 1.15, -1.62, -1.31, -1562.37, -3490.29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.1" stop-color="#fff" stop-opacity="0.85" />
          <stop offset="0.29" stop-color="#fff" stop-opacity="0.59" />
          <stop offset="0.47" stop-color="#fff" stop-opacity="0.38" />
          <stop offset="0.63" stop-color="#fff" stop-opacity="0.22" />
          <stop offset="0.78" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="0.91" stop-color="#fff" stop-opacity="0.03" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="cloud-radial-gradient-3"
          cx="1198.15"
          cy="-1635.1"
          r="6.66"
        />
        <radialGradient
          id="cloud-Degradado_sin_nombre_34"
          cx="10.93"
          cy="51.53"
          r="4.87"
          gradientTransform="matrix(0.9, -0.43, 1.26, 2.62, -63.98, -78.88)"
        />
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="Calque_2" data-name="Calque 2">
          <g id="OBJECTS">
            <path
              d="M73,25.15a27,27,0,0,0-53.89,0,20.12,20.12,0,0,0,1,40.22H72a20.12,20.12,0,0,0,1-40.22Z"
              style={{ fill: "url(#cloud-radial-gradient)" }}
            />
            <path
              d="M46.06,27.65c-7.58-6.15-10.54-15.5-6.61-20.9S52.71,2,60.28,8.09,70.81,23.6,66.89,29,53.63,33.79,46.06,27.65Z"
              style={{
                mixBlendMode: "overlay",
                fill: "url(#cloud-radial-gradient-2)",
              }}
            />
            <path
              d="M73.14,45.82c-6-4.84-8.28-12.19-5.2-16.43s10.42-3.77,16.38,1.06,8.27,12.18,5.19,16.42S79.09,50.64,73.14,45.82Z"
              style={{
                mixBlendMode: "overlay",
                opacity: 0.4,
                fill: "url(#cloud-radial-gradient-3)",
              }}
            />
            <path
              d="M14.39,46.49C10,39.64,4.89,36.34,3,39.12s.11,10.59,4.5,17.44S17,66.72,18.89,63.94,18.78,53.35,14.39,46.49Z"
              style={{
                mixBlendMode: "overlay",
                opacity: 0.2,
                fill: "url(#cloud-Degradado_sin_nombre_34)",
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function RainResult() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 92.11 94.23"
    >
      <defs>
        <radialGradient
          id="rainresult-radial-gradient"
          cx="57.67"
          cy="13.78"
          r="70.26"
          gradientTransform="matrix(-1 0 0 -.73 115.34 23.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.2" stopColor="#d5f3ff"></stop>
          <stop offset="1" stopColor="#85bcf1"></stop>
        </radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-2"
          cx="1248.76"
          cy="-1737.92"
          r="8.48"
          gradientTransform="matrix(-.84 1.15 -1.62 -1.31 -1711.87 -3703.9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.1" stopColor="#fff" stopOpacity="0.85"></stop>
          <stop offset="0.29" stopColor="#fff" stopOpacity="0.59"></stop>
          <stop offset="0.47" stopColor="#fff" stopOpacity="0.38"></stop>
          <stop offset="0.63" stopColor="#fff" stopOpacity="0.22"></stop>
          <stop offset="0.78" stopColor="#fff" stopOpacity="0.1"></stop>
          <stop offset="0.91" stopColor="#fff" stopOpacity="0.03"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-3"
          cx="1248.51"
          cy="-1753.58"
          r="6.66"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="Degradado_sin_nombre_34"
          cx="10.93"
          cy="51.53"
          r="4.87"
          gradientTransform="matrix(.9 -.43 1.26 2.62 -63.98 -78.88)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-4"
          cx="-270.81"
          cy="73.06"
          r="9.89"
          gradientTransform="rotate(30 -133.36 613.994)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d0f2ff"></stop>
          <stop offset="0.2" stopColor="#d5f3ff"></stop>
          <stop offset="1" stopColor="#85bcf1"></stop>
        </radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-5"
          cx="1421.72"
          cy="-1627.39"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-6"
          cx="-255.92"
          cy="64.46"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-7"
          cx="1410.45"
          cy="-1630.74"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-8"
          cx="-241.03"
          cy="55.86"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-9"
          cx="1399.18"
          cy="-1634.1"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-10"
          cx="-226.14"
          cy="47.26"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-11"
          cx="1387.91"
          cy="-1637.45"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-12"
          cx="-256.14"
          cy="81.27"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-13"
          cx="1419.71"
          cy="-1635.41"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-14"
          cx="-241.25"
          cy="72.67"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-15"
          cx="1408.44"
          cy="-1638.76"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-16"
          cx="-226.36"
          cy="64.07"
          r="9.89"
          xlinkHref="#rainresult-radial-gradient-4"
        ></radialGradient>
        <radialGradient
          id="rainresult-radial-gradient-17"
          cx="1397.17"
          cy="-1642.12"
          r="1.55"
          gradientTransform="matrix(-1.3 .58 -.75 -1.95 658.9 -3914.48)"
          xlinkHref="#rainresult-radial-gradient-2"
        ></radialGradient>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g data-name="Calque 2">
          <g>
            <path
              fill="url(#rainresult-radial-gradient)"
              d="M73 25.15a27 27 0 00-53.89 0 20.12 20.12 0 001 40.22H72a20.12 20.12 0 001-40.22z"
            ></path>
            <path
              d="M46.06 27.65c-7.58-6.15-10.54-15.5-6.61-20.9S52.71 2 60.28 8.09 70.81 23.6 66.89 29s-13.26 4.79-20.83-1.35z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-2)"
            ></path>
            <path
              d="M73.14 45.81c-6-4.83-8.28-12.18-5.2-16.42s10.42-3.77 16.38 1.06 8.27 12.18 5.19 16.42-10.42 3.77-16.37-1.06z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-3)"
              opacity="0.4"
            ></path>
            <path
              d="M14.39 46.49C10 39.63 4.89 36.34 3 39.12s.11 10.59 4.5 17.44 9.5 10.15 11.39 7.37-.11-10.58-4.5-17.44z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#Degradado_sin_nombre_34)"
              opacity="0.2"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-4)"
              d="M23.58 77.73a4.11 4.11 0 11-7.12-4.11c1.14-2 8.16-5.9 8.16-5.9s.1 8.05-1.04 10.01z"
            ></path>
            <path
              d="M16.58 77.05c-.64-1.66-.25-3.42.87-3.91s2.53.45 3.17 2.12.25 3.41-.86 3.91-2.54-.45-3.18-2.12z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-5)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-6)"
              d="M40.78 77.73a4.11 4.11 0 01-7.13-4.11c1.14-2 8.16-5.9 8.16-5.9s.1 8.05-1.03 10.01z"
            ></path>
            <path
              d="M33.77 77.05c-.63-1.66-.25-3.42.87-3.91s2.54.45 3.17 2.12.25 3.41-.86 3.91-2.54-.45-3.18-2.12z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-7)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-8)"
              d="M58 77.73a4.11 4.11 0 11-7.12-4.11c1.13-2 8.15-5.9 8.15-5.9s.07 8.05-1.03 10.01z"
            ></path>
            <path
              d="M51 77.05c-.64-1.66-.25-3.42.86-3.91s2.54.45 3.18 2.12.25 3.41-.87 3.91-2.56-.45-3.17-2.12z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-9)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-10)"
              d="M75.16 77.73A4.11 4.11 0 1168 73.62c1.14-2 8.16-5.9 8.16-5.9s.14 8.05-1 10.01z"
            ></path>
            <path
              d="M68.16 77.05c-.64-1.66-.25-3.42.87-3.91s2.53.45 3.17 2.12.25 3.41-.87 3.91-2.53-.45-3.17-2.12z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-11)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-12)"
              d="M32.18 92.18a4.11 4.11 0 01-7.12-4.11c1.13-2 8.15-5.91 8.15-5.91s.1 8.05-1.03 10.02z"
            ></path>
            <path
              d="M25.18 91.5c-.64-1.67-.25-3.42.86-3.92s2.54.46 3.18 2.12.25 3.42-.87 3.91-2.53-.45-3.17-2.11z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-13)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-14)"
              d="M49.37 92.18a4.11 4.11 0 01-7.12-4.11c1.14-2 8.16-5.91 8.16-5.91s.1 8.05-1.04 10.02z"
            ></path>
            <path
              d="M42.37 91.5c-.64-1.67-.25-3.42.87-3.92s2.53.46 3.17 2.12.25 3.42-.86 3.91-2.55-.45-3.18-2.11z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-15)"
            ></path>
            <path
              fill="url(#rainresult-radial-gradient-16)"
              d="M66.56 92.18a4.11 4.11 0 01-7.12-4.11c1.14-2 8.16-5.91 8.16-5.91s.1 8.05-1.04 10.02z"
            ></path>
            <path
              d="M59.56 91.5c-.63-1.67-.25-3.42.87-3.92S63 88 63.6 89.7s.25 3.42-.86 3.91-2.54-.45-3.18-2.11z"
              style={{ mixBlendMode: "overlay" }}
              fill="url(#rainresult-radial-gradient-17)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

function TemperatureMinResult() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.66 87.07">
      <defs>
        <radialGradient
          id="tempmin-radial-gradient"
          cx="59.03"
          cy="56.66"
          r="37.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#28cbe9" />
          <stop offset="1" stop-color="#0a4fbb" />
        </radialGradient>
        <linearGradient
          id="tempmin-linear-gradient"
          y1="43.53"
          x2="39.16"
          y2="43.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#dbe1ff" />
          <stop offset="1" stop-color="#cbd1e9" />
        </linearGradient>
        <linearGradient
          id="tempmin-linear-gradient-2"
          x1="19.58"
          y1="52.66"
          x2="19.58"
          y2="61.85"
        />
        <radialGradient
          id="tempmin-radial-gradient-2"
          cx="16.86"
          cy="75.1"
          r="11.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#54f5ff" />
          <stop offset="0.12" stop-color="#28cbe9" />
          <stop offset="1" stop-color="#0a4fbb" />
        </radialGradient>
      </defs>
      <g id="Calque_2" data-name="Calque 2">
        <g id="OBJECTS">
          <path
            d="M64.64,73.41l-4-2.29,1.23-.71a2,2,0,0,0-2-3.54l-3.27,1.89-3-1.74a7.24,7.24,0,0,0,.21-1.69,7.16,7.16,0,0,0-.21-1.68l3-1.75,3.27,1.89a2,2,0,0,0,1,.28,2,2,0,0,0,1-3.81l-1.23-.71,4-2.3a2,2,0,1,0-2-3.53l-4,2.29V54.59a2.05,2.05,0,0,0-2.05-2h0a2,2,0,0,0-2,2v3.78l-3,1.75a7.08,7.08,0,0,0-2.92-1.69V54.94l3.28-1.89a2,2,0,0,0-2.05-3.53l-1.23.71V45.64a2,2,0,0,0-4.08,0v4.59l-1.23-.71a2,2,0,1,0-2,3.53l3.27,1.89v3.49a7,7,0,0,0-2.91,1.69l-3-1.75V54.59a2,2,0,0,0-4.09,0V56l-4-2.29a2,2,0,1,0-2,3.53l4,2.3-1.23.71a2,2,0,0,0,1,3.81,2,2,0,0,0,1-.28l3.28-1.89,3,1.75a6.67,6.67,0,0,0-.21,1.68A6.75,6.75,0,0,0,39.57,67l-3,1.74-3.28-1.89a2,2,0,0,0-2,3.54l1.24.71-4,2.29a2,2,0,0,0,1,3.81,2.08,2.08,0,0,0,1-.27l4-2.3v1.42a2,2,0,0,0,4.08,0V72.29l3-1.74a7.27,7.27,0,0,0,2.91,1.69v3.48l-3.27,1.89a2,2,0,0,0,2,3.54l1.23-.71V85a2,2,0,0,0,4.08,0V80.44l1.23.71a2.1,2.1,0,0,0,1,.27,2,2,0,0,0,1-3.81L48.6,75.72V72.24a7.2,7.2,0,0,0,2.92-1.69l3,1.74v3.78a2,2,0,0,0,4.08,0V74.65l4,2.3a2.08,2.08,0,0,0,1,.27,2,2,0,0,0,1-3.81Zm-18.08-5a3.13,3.13,0,1,1,3.13-3.13A3.13,3.13,0,0,1,46.56,68.46Z"
            style={{ fill: "url(#tempmin-radial-gradient)" }}
          />
          <rect
            width="39.16"
            height="87.07"
            rx="7.72"
            style={{ fill: "url(#tempmin-linear-gradient)" }}
          />
          <path
            d="M15.75,68a3.83,3.83,0,0,0,7.66,0V14.83a3.83,3.83,0,0,0-7.66,0Z"
            style={{ fill: "#a3aad2" }}
          />
          <path
            d="M15.75,68a3.83,3.83,0,0,0,7.66,0V58.1a3.83,3.83,0,0,0-7.66,0Z"
            style={{ fill: "url(#tempmin-linear-gradient-2)" }}
          />
          <path
            d="M27.47,71a7.89,7.89,0,1,1-7.89-7.89A7.89,7.89,0,0,1,27.47,71Z"
            style={{ fill: "url(#tempmin-radial-gradient-2)" }}
          />
          <path
            d="M32.14,18.3a.77.77,0,0,1-.77.77H27.78A.77.77,0,0,1,27,18.3h0a.77.77,0,0,1,.76-.77h3.59a.77.77,0,0,1,.77.77Z"
            style={{ fill: "#a3aad2" }}
          />
          <path
            d="M32.14,29.49a.76.76,0,0,1-.77.77H27.78a.76.76,0,0,1-.76-.77h0a.76.76,0,0,1,.76-.76h3.59a.76.76,0,0,1,.77.76Z"
            style={{ fill: "#a3aad2" }}
          />
          <path
            d="M32.14,40.69a.77.77,0,0,1-.77.77H27.78a.77.77,0,0,1-.76-.77h0a.77.77,0,0,1,.76-.77h3.59a.77.77,0,0,1,.77.77Z"
            style={{ fill: "#a3aad2" }}
          />
          <path
            d="M32.14,51.88a.76.76,0,0,1-.77.77H27.78a.76.76,0,0,1-.76-.77h0a.76.76,0,0,1,.76-.76h3.59a.76.76,0,0,1,.77.76Z"
            style={{ fill: "#a3aad2" }}
          />
          <path
            d="M32.14,63.08a.76.76,0,0,1-.77.76H27.78a.76.76,0,0,1-.76-.76h0a.76.76,0,0,1,.76-.77h3.59a.76.76,0,0,1,.77.77Z"
            style={{ fill: "#a3aad2" }}
          />
        </g>
      </g>
    </svg>
  );
}

function TemperatureMaxResult() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.35 87.07">
      <defs>
        <linearGradient
          id="tempmax-linear-gradient"
          x1="65.41"
          y1="42.95"
          x2="26.79"
          y2="86.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffba24" />
          <stop offset="1" stop-color="#f50" />
        </linearGradient>
        <radialGradient
          id="tempmax-radial-gradient"
          cx="92.59"
          cy="55.13"
          r="30.89"
          gradientTransform="matrix(-1, 0, 0, 1, 141.69, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff4c3" />
          <stop offset="0.16" stop-color="#ffe036" />
          <stop offset="1" stop-color="#fa761c" />
        </radialGradient>
        <radialGradient
          id="tempmax-radial-gradient-2"
          cx="1295.66"
          cy="-1901.59"
          r="4.64"
          gradientTransform="matrix(-0.84, 1.15, -1.62, -1.31, -1938.85, -3932.39)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.1" stop-color="#fff" stop-opacity="0.85" />
          <stop offset="0.29" stop-color="#fff" stop-opacity="0.59" />
          <stop offset="0.47" stop-color="#fff" stop-opacity="0.38" />
          <stop offset="0.63" stop-color="#fff" stop-opacity="0.22" />
          <stop offset="0.78" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="0.91" stop-color="#fff" stop-opacity="0.03" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="tempmax-Degradado_sin_nombre_34"
          cx="-2819.03"
          cy="2695.06"
          r="4.47"
          gradientTransform="matrix(-1.17, -1.1, 0.22, -0.73, -3865.12, -1066.23)"
        />
        <linearGradient
          id="tempmax-linear-gradient-2"
          y1="43.53"
          x2="39.16"
          y2="43.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#dbe1ff" />
          <stop offset="1" stop-color="#cbd1e9" />
        </linearGradient>
        <linearGradient
          id="tempmax-linear-gradient-3"
          x1="19.58"
          y1="26.72"
          x2="19.58"
          y2="50.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e93c28" />
          <stop offset="1" stop-color="#bb160a" />
        </linearGradient>
        <radialGradient
          id="tempmax-radial-gradient-3"
          cx="17.37"
          cy="75.54"
          r="12.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ff909a" />
          <stop offset="0.2" stop-color="#e93c28" />
          <stop offset="1" stop-color="#bb160a" />
        </radialGradient>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="Calque_2" data-name="Calque 2">
          <g id="OBJECTS">
            <polygon
              points="62.57 79.03 57.75 79.34 56.85 84.08 52.22 82.73 49.74 86.87 45.85 84.02 42.11 87.07 39.43 83.06 34.88 84.64 33.73 79.95 28.91 79.89 29.43 75.09 24.92 73.38 27.06 69.05 23.41 65.89 26.89 62.56 24.54 58.35 28.95 56.4 28.19 51.64 33 51.32 33.91 46.59 38.54 47.94 41.01 43.79 44.9 46.65 48.64 43.6 51.32 47.61 55.88 46.02 57.02 50.71 61.85 50.78 61.32 55.58 65.83 57.29 63.7 61.62 67.35 64.77 63.86 68.11 66.21 72.32 61.8 74.26 62.57 79.03"
              style={{ fill: "url(#tempmax-linear-gradient)" }}
            />
            <path
              d="M29.1,65.33A16.28,16.28,0,1,0,45.38,49.06,16.28,16.28,0,0,0,29.1,65.33Z"
              style={{ fill: "url(#tempmax-radial-gradient)" }}
            />
            <path
              d="M47.86,63.66c-4.15-3.37-5.77-8.48-3.62-11.44s7.25-2.62,11.4.74,5.76,8.48,3.61,11.43S52,67,47.86,63.66Z"
              style={{
                mixBlendMode: "overlay",
                fill: "url(#tempmax-radial-gradient-2)",
              }}
            />
            <path
              d="M31,68.93c.55-1.8,3.34-1.05,6.24,1.67S42,77,41.48,78.78s-3.34,1-6.24-1.67S30.45,70.73,31,68.93Z"
              style={{
                mixBlendMode: "overlay",
                opacity: 0.4,
                fill: "url(#tempmax-Degradado_sin_nombre_34)",
              }}
            />
            <rect
              width="39.16"
              height="87.07"
              rx="7.72"
              style={{ fill: "url(#tempmax-linear-gradient-2)" }}
            />
            <path
              d="M15.75,68a3.83,3.83,0,0,0,7.66,0V14.83a3.83,3.83,0,0,0-7.66,0Z"
              style={{ fill: "#a3aad2" }}
            />
            <path
              d="M15.75,68a3.83,3.83,0,0,0,7.66,0V29.72a3.83,3.83,0,0,0-7.66,0Z"
              style={{ fill: "url(#tempmax-linear-gradient-3)" }}
            />
            <path
              d="M27.47,71a7.89,7.89,0,1,1-7.89-7.89A7.89,7.89,0,0,1,27.47,71Z"
              style={{ fill: "url(#tempmax-radial-gradient-3)" }}
            />
            <path
              d="M32.14,18.3a.77.77,0,0,1-.77.77H27.78A.77.77,0,0,1,27,18.3h0a.77.77,0,0,1,.76-.77h3.59a.77.77,0,0,1,.77.77Z"
              style={{ fill: "#a3aad2" }}
            />
            <path
              d="M32.14,29.49a.76.76,0,0,1-.77.77H27.78a.76.76,0,0,1-.76-.77h0a.76.76,0,0,1,.76-.76h3.59a.76.76,0,0,1,.77.76Z"
              style={{ fill: "#a3aad2" }}
            />
            <path
              d="M32.14,40.69a.77.77,0,0,1-.77.77H27.78a.77.77,0,0,1-.76-.77h0a.77.77,0,0,1,.76-.77h3.59a.77.77,0,0,1,.77.77Z"
              style={{ fill: "#a3aad2" }}
            />
            <path
              d="M32.14,51.88a.76.76,0,0,1-.77.77H27.78a.76.76,0,0,1-.76-.77h0a.76.76,0,0,1,.76-.76h3.59a.76.76,0,0,1,.77.76Z"
              style={{ fill: "#a3aad2" }}
            />
            <path
              d="M32.14,63.08a.76.76,0,0,1-.77.76H27.78a.76.76,0,0,1-.76-.76h0a.76.76,0,0,1,.76-.77h3.59a.76.76,0,0,1,.77.77Z"
              style={{ fill: "#a3aad2" }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function WindResult() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 77 52"
    >
      <use x="0.5" y="0.5" xlinkHref="#A"></use>
      <symbol id="A" overflow="visible">
        <g fill="#add3f7" fillRule="nonzero" stroke="none">
          <path d="M29.43 16.149H5.685a1.392 1.392 0 01-1.395-1.395c0-.765.615-1.395 1.395-1.395h23.4c1.83-.48 2.79-1.26 3.33-2.685.87-2.19.63-3.75-.69-5.31-1.17-1.38-3.12-1.98-4.785-1.53-1.935.54-3.27 2.475-3.75 5.445-.12.765-.855 1.29-1.575 1.17-.765-.12-1.29-.855-1.17-1.575.885-5.535 3.975-7.2 5.73-7.695 2.715-.765 5.79.21 7.665 2.415 1.995 2.37 2.37 4.965 1.17 8.115-1.185 3.045-3.66 3.99-5.415 4.425H29.4v.015h.03zm25.17 7.41H1.515A1.392 1.392 0 01.12 22.164a1.38 1.38 0 011.395-1.395h52.8c3.18-.69 5.235-2.34 6.3-5.07 1.53-3.975 1.155-6.915-1.32-9.825-2.145-2.55-5.805-3.72-8.94-2.835-3.63 1.035-6.075 4.5-6.915 9.855-.12.765-.855 1.29-1.575 1.17-.765-.12-1.29-.855-1.17-1.575 1.38-8.73 6.18-11.325 8.91-12.09 4.2-1.185 8.94.33 11.82 3.735 3.12 3.69 3.69 7.695 1.77 12.615-1.425 3.675-4.275 5.97-8.46 6.825l-.135-.015zm12.765 18.69c-.63 0-1.275-.075-1.875-.255-1.755-.495-4.875-2.145-5.73-7.695a1.36 1.36 0 112.745-.405c.465 2.97 1.785 4.905 3.75 5.445 1.65.465 3.63-.165 4.785-1.53 1.35-1.575 1.53-3.12.69-5.31-.54-1.44-1.485-2.19-3.33-2.685H44.97a1.392 1.392 0 01-1.395-1.395c0-.765.615-1.395 1.395-1.395h23.745l.165.045c3.69.93 4.86 2.955 5.415 4.425 1.23 3.15.87 5.73-1.17 8.115-1.425 1.665-3.615 2.64-5.76 2.64z"></path>
          <path d="M41.895 50.589a10.63 10.63 0 01-2.91-.39c-2.745-.765-7.545-3.36-8.91-12.09a1.36 1.36 0 011.17-1.575 1.36 1.36 0 011.575 1.17c.855 5.325 3.285 8.835 6.915 9.855 3.105.885 6.795-.3 8.955-2.85 2.445-2.91 2.85-5.82 1.32-9.825-1.065-2.73-3.105-4.395-6.3-5.07H1.395A1.392 1.392 0 010 28.419c0-.765.615-1.395 1.395-1.395h42.57l.135.03c4.215.87 7.05 3.15 8.46 6.825 1.89 4.92 1.335 8.925-1.77 12.615-2.22 2.595-5.55 4.095-8.895 4.095z"></path>
        </g>
      </symbol>
    </svg>
  );
}

function DropletResult() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 107.125 98.125"
    >
      <use x="2.083" y="2.083" xlinkHref="#K"></use>
      <symbol id="K" overflow="visible">
        <g fillRule="nonzero" stroke="none">
          <g fill="#61b2e4">
            <use xlinkHref="#C"></use>
            <path d="M100.824 11.848c2.667 5.146 3.404 11.25 1.525 17.171s-6 10.479-11.09 13.167a22.508 22.508 0 01-17.152 1.467c-9.354-2.969-18.129-17.229-24.448-27.51l-3.035-4.812c1.642-.652 3.379-1.404 5.196-2.198C62.912 4.373 78.243-2.233 87.657.756c5.923 1.879 10.479 6 13.167 11.09z"></path>
            <use xlinkHref="#D"></use>
          </g>
          <path
            fill="#92d3f5"
            d="M21.683 22.598l-2.5-1.5-5.892-3.567-2.583 6.446C5.056 37.588-2.771 56.471.99 67.852a27.48 27.48 0 0013.729 15.921c6.3 3.112 13.76 3.925 20.965 1.546a27.077 27.077 0 009.285-5.283c4.413-14.652-11.104-40.333-23.279-57.437zM53.99 8.203l-2.175.931-5.196 2.198 3.038 4.792c6.319 10.283 15.092 24.542 24.448 27.511a22.5 22.5 0 0017.152-1.467c5.09-2.708 9.208-7.246 11.09-13.167 1.742-5.488 1.215-11.119-.992-16.015-9.896-5.54-31.969-5.588-47.365-4.775zm40.617 83.575c.496-12.556-15.471-26.073-24.292-32.556l-2.035-.208.237 4.104c.417 8.719.958 20.833 5.838 25.967a16.27 16.27 0 0011.367 5.079 16.5 16.5 0 008.883-2.365z"
          ></path>
        </g>
        <g fill="none" strokeWidth="4.167">
          <use xlinkHref="#C"></use>
          <path d="M91.827 2.565c3.908 2.188 6.979 5.463 8.992 9.281 2.667 5.146 3.404 11.25 1.525 17.171s-6 10.479-11.09 13.167a22.508 22.508 0 01-17.152 1.467c-9.354-2.969-18.129-17.229-24.448-27.51l-3.038-4.813c1.642-.652 3.379-1.404 5.196-2.198 4.946-2.121 10.735-4.61 16.467-6.454M88.373.994a22.56 22.56 0 013.454 1.567M87.652.752c.242.077.483.157.723.242M83.427.031c1.504.077 2.923.306 4.229.721m-5.142-.75a22.68 22.68 0 01.915.027m-3.152.046a25.52 25.52 0 012.237-.073M78.077.31a33.196 33.196 0 012.198-.235m-3.619.458A41.51 41.51 0 0178.073.31m-4.646.9a51.337 51.337 0 013.227-.677m-5.027 1.142l1.8-.465m-2.704.719l.904-.254m-3.35 1a79.189 79.189 0 012.446-.746"></path>
          <use xlinkHref="#D"></use>
        </g>
      </symbol>
      <defs>
        <path
          id="C"
          d="M51.574 71.523c-3.187 6.325-8.692 11.417-15.896 13.798s-14.663 1.567-20.965-1.546A27.408 27.408 0 01.984 67.854c-3.758-11.381 4.067-30.265 9.719-43.875l2.583-6.446c1.821 1.156 3.808 2.337 5.892 3.567 12.646 7.569 30.154 18.004 33.958 29.458 2.379 7.204 1.567 14.663-1.546 20.965z"
        ></path>
        <path
          id="D"
          d="M102.399 78.294c-.115 4.192-1.785 8.313-5.048 11.396s-7.467 4.531-11.625 4.45a16.27 16.27 0 01-11.367-5.079c-4.881-5.154-5.437-17.25-5.838-25.967l-.237-4.104c1.267.163 2.629.292 4.056.429 8.688.875 20.698 2.063 25.611 7.25 3.09 3.263 4.531 7.467 4.45 11.625z"
        ></path>
      </defs>
    </svg>
  );
}

export {
  Temperature,
  TemperatureMin,
  TemperatureMax,
  Precipitation,
  Wind,
  Rain,
  Mail,
  Github,
  LinkedIn,
  Sunrise,
  Moon,
  Search,
  Sun,
  Snow,
  Cloud,
  RainResult,
  TemperatureMinResult,
  TemperatureMaxResult,
  WindResult,
  DropletResult,
};
