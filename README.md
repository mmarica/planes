# Planes

## Server side

Enter the server folder:

```
cd server
```

Install composer packages:

```
composer install
```

Start the server:

```
cd server
php -S localhost:8000
```

## Client side

Install node packages:

```
npm install
```

Create a pusher config file:

```
cp -a src/environments/pusher.config.sample.ts src/environments/pusher.config.ts
```

Edit `src/environments/pusher.config.ts` to set your pusher app key and cluster.

Start the app:

```
ng server
```

Open it the in the browser:

```
http://localhost:4200/
```