BUILD_SIM=build

.PHONY: setup simulator demo clean

setup:
	git submodule update --recursive --init
	yarn

simulator:
	@mkdir -p $(BUILD_SIM)
	cmake -B "$(BUILD_SIM)" -DCMAKE_BUILD_TYPE=Simulator
	cd $(BUILD_SIM) && make -j

# Set default project argument to 'widgets' if no project is provided
demo: simulator
	@PROJECT=$${PROJECT:-widgets}; \
	echo "Running demo with project: $$PROJECT"; \
	node build.js && \
	./${BUILD_SIM}/lvgljs run demo/$$PROJECT/index.js

clean:
	rm -rf $(BUILD_SIM)