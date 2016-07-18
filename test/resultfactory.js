describe('Results Factory', function () {
    var resultfactory,
    httpbackend;

    beforeEach(function () {
        module('myappApp');
    });

    beforeEach(inject(function(_resultFactory_, _$httpBackend_) {
        resultfactory = _resultFactory_;
        $httpBackend = _$httpBackend_;
      }));

    describe('when invoked', function() {
        beforeEach(function() {
          $httpBackend.expectGET('http://hotelmgmt.mybluemix.net/results/att/5')
          .respond(200, [
                         {
                        	    "id": 1,
                        	    "name": "Hyatt",
                        	    "address": {
                        	      "address": "Viman Nagar",
                        	      "location": "Pune MH India",
                        	      "zip": 411001
                        	    },
                        	    "dayRate": 6000,
                        	    "nightRate": 7000
                        	  }
                        	]);

          resultfactory.getResults();
          $httpBackend.flush();
        });

        it('should send an HTTP Get request', function() {
          $httpBackend.verifyNoOutstandingExpectation();
          $httpBackend.verifyNoOutstandingRequest();
        });
      });

});
